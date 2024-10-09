import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import handlebars from 'vite-plugin-handlebars';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import { resolve } from 'path';

const path = require('path');
const glob = require('glob');

const folder = {
    src: "src/", // source files
    src_assets: "src/assets/", // source assets files
    dist: "dist/", // build files
    dist_assets: "dist/assets/" //build assets files
};

export default defineConfig({
    plugins: [
        {
            name: 'preload-script',
            configResolved() {
                // Run the preload script
                execSync('node ./preload.js', { stdio: 'inherit' });
            }
        },
        handlebars({
            partialDirectory: resolve(__dirname, folder.src),
        }),
        ViteImageOptimizer({
            test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
            /* pass your config */
            svg: {
                multipass: true,
                ansiColors: true,
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                cleanupNumericValues: false,
                                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                            },
                            cleanupIDs: {
                                minify: false,
                                remove: false,
                            },
                            convertPathData: false,
                        },
                    },
                    'sortAttrs',
                    {
                        name: 'addAttributesToSVGElement',
                        params: {
                            attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                        },
                    },
                ],
            },
            png: {
                quality: 100,
            },
            jpeg: {
                quality: 100,
            },
            jpg: {
                quality: 100,
            },
            cache: false,
        }),
    ],
    base: '',
    // logLevel: 'error', // if you want to disable logging use 'info' | 'warn' | 'error' | 'silent'
    clearScreen: true,
    root: path.resolve(__dirname, folder.src),
    build: {
        outDir: '../dist',
        emptyOutDir: false,
        // watch: {},  // if you want to watch your build files
        rollupOptions: {
            manualChunks: undefined,

            input: {
                icons: folder.src_assets + 'scss/icons.scss',
                bootstrap: folder.src_assets + 'scss/bootstrap.scss',
                appCustom: folder.src_assets + 'scss/app.scss',
                ...generateHtmlEntries(),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.name.split('.').pop();
                    if (ext === 'css') {
                        return 'assets/css/' + `[name]` + '.css';
                    } else if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                        return 'assets/images/' + assetInfo.name;
                    } else {
                        return 'assets/css/' + assetInfo.name;
                    }
                },
                entryFileNames: 'assets/js/' + `[name]` + `.js`,
            },
            external: [
                // Add any other external dependencies here
                /^assets\/libs\//, // This regex matches the external import path
            ],
            plugins: [
                // ...other plugins
                require('rollup-plugin-copy')({
                    targets: [
                        { src: folder.src_assets + 'lang', dest: folder.dist_assets },
                        { src: folder.src_assets + 'json', dest: folder.dist_assets },
                        { src: folder.src_assets + 'js/table', dest: folder.dist_assets + 'js' },
                    ],
                }),
                {
                    name: 'copy-specific-packages',
                    async writeBundle() {
                        const outputPath = path.resolve(__dirname, folder.dist_assets); // Adjust the destination path
                        const outputPathSrc = path.resolve(__dirname, folder.src_assets); // Adjust the destination path
                        const configPath = path.resolve(__dirname, 'package-libs-config.json');

                        try {
                            const configContent = await fs.readFile(configPath, 'utf-8');
                            const { packagesToCopy } = JSON.parse(configContent);

                            for (const packageName of packagesToCopy) {
                                const destPackagePath = path.join(outputPath, 'libs', packageName);
                                const destPackagePathSrc = path.join(outputPathSrc, 'libs', packageName);

                                const sourcePath = (fs.existsSync(path.join(__dirname, 'node_modules', packageName + "/dist"))) ?
                                    path.join(__dirname, 'node_modules', packageName + "/dist")
                                    : path.join(__dirname, 'node_modules', packageName);

                                try {
                                    await fs.access(sourcePath, fs.constants.F_OK);
                                    await fs.copy(sourcePath, destPackagePath);
                                    await fs.copy(sourcePath, destPackagePathSrc);
                                } catch (error) {
                                    console.error(`Package ${packageName} does not exist.`);
                                }
                            }
                        } catch (error) {
                            console.error('Error copying and renaming packages:', error);
                        }
                    },
                },
            ],
        },

    },
    publicDir: 'dist',
    server: {
        port: 8080,
        hot: true
    }
})

function generateHtmlEntries() {
    const entries = {};

    // Modify the glob pattern to match your HTML file location
    const htmlFiles = glob.sync('src/*.html');
    htmlFiles.forEach((file) => {
        const name = file.replace('src/', '').replace('.html', '');
        entries[name] = file;
    });

    return entries;
}
