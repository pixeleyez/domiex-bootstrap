import { getColorCodes } from "../helpers/helper.js";

// Initialize Alpine.js
document.addEventListener("alpine:init", () => {
    Alpine.data("apexTreeApp", () => ({
        init() {
            this.colorCodes = getColorCodes(this.$refs.apexTreeContainer.dataset);
            this.initializeTreeData();
            this.renderTree();

            // Reload tree on window resize
            window.addEventListener('resize', this.reloadTree.bind(this));
        },
        colorCodes: [],
        initializeTreeData() {
            this.treeData = {
                id: 'ms',
                data: {
                    imageURL: "assets/images/avatar/user-4.png",
                    name: 'Jordan Davis',
                },
                options: {
                    nodeBGColor: this.colorCodes[2],
                    nodeBGColorHover: this.colorCodes[2],
                },
                children: [
                    {
                        id: 'mh',
                        data: {
                            imageURL: "assets/images/avatar/user-11.png",
                            name: 'Chris Wilson',
                        },
                        options: {
                            nodeBGColor: this.colorCodes[3],
                            nodeBGColorHover: this.colorCodes[3],
                        },
                        children: [
                            {
                                id: 'kb',
                                data: {
                                    imageURL: "assets/images/avatar/user-13.png",
                                    name: 'Alex Lee',
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[4],
                                    nodeBGColorHover: this.colorCodes[4],
                                },
                            },
                            {
                                id: 'cr',
                                data: {
                                    imageURL: "assets/images/avatar/user-14.png",
                                    name: 'Taylor Wilson',
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[5],
                                    nodeBGColorHover: this.colorCodes[5],
                                },
                            },
                        ],
                    },
                    {
                        id: 'cs',
                        data: {
                            imageURL: "assets/images/avatar/user-15.png",
                            name: 'Jane Brown',
                        },
                        options: {
                            nodeBGColor: this.colorCodes[6],
                            nodeBGColorHover: this.colorCodes[6],
                        },
                        children: [
                            {
                                id: 'Noah_Chandler',
                                data: {
                                    imageURL: "assets/images/avatar/user-16.png",
                                    name: 'John Garcia',
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[7],
                                    nodeBGColorHover: this.colorCodes[7],
                                },
                            },
                            {
                                id: 'Felix_Wagner',
                                data: {
                                    imageURL: "assets/images/avatar/user-17.png",
                                    name: 'Cameron Wilson',
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[8],
                                    nodeBGColorHover: this.colorCodes[8],
                                },
                            },
                        ],
                    },
                ],
            },
                this.treeOptions = {
                    contentKey: 'data',
                    width: '100%',
                    height: 600,
                    nodeWidth: 150,
                    nodeHeight: 120,
                    fontColor: this.colorCodes[1],
                    edgeColor: this.colorCodes[0],
                    edgeColorHover: this.colorCodes[2],
                    childrenSpacing: 50,
                    siblingSpacing: 20,
                    direction: 'top',
                    nodeTemplate: (content) => `
                <div class="d-flex justify-content-center align-items-center gap-5 flex-column p-3">
                    <img class="size-12 rounded-circle" src='${content.imageURL}' alt='' />
                    <h6>${content.name}</h6>
                </div>`,
                    // Use Alpine to set a dynamic class or inline styles if needed
                    // canvasClass: this.colorCodes[1],
                    enableToolbar: true,
                }
        },

        renderTree() {
            if (this.$refs.apexTreeContainer) {
                this.$refs.apexTreeContainer.innerHTML = ''; // Clear the container
            }

            // Initialize new tree
            this.apexTree = new ApexTree(this.$refs.apexTreeContainer, this.treeOptions);
            this.apexTree.render(this.treeData);
        },
        reloadTree() {
            // Handle the logic for resizing
            this.renderTree(); // Re-render tree on resize
        },
    }));
});