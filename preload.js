const fs = require('fs-extra');
const path = require('path');

// Define the source and destination directories
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const destinationBasePath = path.resolve(__dirname, 'src/assets/libs');


// Load the package configuration file
const configPath = path.resolve(__dirname, 'package-libs-config.json');
let packagesToCopy = [];

try {
    const configContent = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configContent);
    packagesToCopy = config.packagesToCopy || [];
} catch (err) {
    console.error('Error reading package-libs-config.json:', err);
}

// Function to copy a package
async function copyPackage(packageName) {
    const sourcePath = path.join(nodeModulesPath, packageName);
    const destinationPath = path.join(destinationBasePath, packageName);

    try {
        // Ensure the destination directory exists
        await fs.ensureDir(destinationPath);

        // Copy the package from node_modules to the destination
        await fs.copy(sourcePath, destinationPath);

        console.log(`Copied ${packageName} to ${destinationPath}`);
    } catch (err) {
        console.error(`Error copying ${packageName}:`, err);
    }
}

// Copy all specified packages
async function copyAllPackages() {
    for (const packageName of packagesToCopy) {
        await copyPackage(packageName);
    }
}

// Execute the copy function
copyAllPackages().then(() => {
    console.log('All packages copied successfully.');
}).catch(err => {
    console.error('Error during package copying:', err);
});