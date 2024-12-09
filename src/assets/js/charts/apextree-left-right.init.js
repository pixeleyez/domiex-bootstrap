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
                id: 'Lucas_Alex',
                data: {
                    name: 'Omer Sporer',
                    imageURL: "assets/images/avatar/user-1.png",
                },
                options: {
                    nodeBGColor: this.colorCodes[3],
                    nodeBGColorHover: this.colorCodes[3],
                },
                children: [
                    {
                        id: 'Alex_Lee',
                        data: {
                            name: 'Reva Botsford',
                            imageURL: "assets/images/avatar/user-2.png",
                        },
                        options: {
                            nodeBGColor: this.colorCodes[4],
                            nodeBGColorHover: this.colorCodes[4],
                        },
                        children: [
                            {
                                id: 'Mia_Patel',
                                data: {
                                    name: 'Tyshawn Marquardt',
                                    imageURL: "assets/images/avatar/user-3.png",
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[5],
                                    nodeBGColorHover: this.colorCodes[5],
                                },
                            },
                            {
                                id: 'Ryan_Clark',
                                data: {
                                    name: 'Kailey Corkery',
                                    imageURL: "assets/images/avatar/user-4.png",
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[5],
                                    nodeBGColorHover: this.colorCodes[5],
                                },
                            },
                            {
                                id: 'Zoe_Wang',
                                data: {
                                    name: 'Zoe Wang',
                                    imageURL: "assets/images/avatar/user-5.png",
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[5],
                                    nodeBGColorHover: this.colorCodes[5],
                                },
                            },
                        ],
                    },
                    {
                        id: 'Leo_Kim',
                        data: {
                            name: 'Hardy Maggio',
                            imageURL: "assets/images/avatar/user-6.png",
                        },
                        options: {
                            nodeBGColor: this.colorCodes[6],
                            nodeBGColorHover: this.colorCodes[6],
                        },
                        children: [
                            {
                                id: 'Ava_Jones',
                                data: {
                                    name: 'Adelle Abbott',
                                    imageURL: "assets/images/avatar/user-7.png",
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[7],
                                    nodeBGColorHover: this.colorCodes[7],
                                },
                            },
                            {
                                id: 'Maya_Gupta',
                                data: {
                                    name: 'Vincenzo Hirthe',
                                    imageURL: "assets/images/avatar/user-8.png",
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[7],
                                    nodeBGColorHover: this.colorCodes[7],
                                },
                            },
                        ],
                    },

                    {
                        id: 'Lily_Chen',
                        data: {
                            name: 'Idella Heaney',
                            imageURL: "assets/images/avatar/user-9.png",
                        },
                        options: {
                            nodeBGColor: this.colorCodes[8],
                            nodeBGColorHover: this.colorCodes[8],
                        },
                        children: [
                            {
                                id: 'Jake_Scott',
                                data: {
                                    name: 'Lambert Schoen',
                                    imageURL: "assets/images/avatar/user-10.png",
                                },
                                options: {
                                    nodeBGColor: this.colorCodes[9],
                                    nodeBGColorHover: this.colorCodes[9],
                                },
                            },
                        ],
                    },
                    {
                        id: 'Max_Ruiz',
                        data: {
                            name: 'Cornelius Harris',
                            imageURL: "assets/images/avatar/user-11.png",
                        },
                        options: {
                            nodeBGColor: this.colorCodes[10],
                            nodeBGColorHover: this.colorCodes[10],
                        },
                    },
                ],
            },
                this.treeOptions = {
                    contentKey: 'data',
                    width: '100%',
                    height: 700,
                    nodeWidth: 150,
                    nodeHeight: 70,
                    childrenSpacing: 70,
                    siblingSpacing: 30,
                    fontSize: '12px',
                    direction: 'left',
                    borderRadius: 0,
                    nodeBGColor: this.colorCodes[2],
                    nodeBGColorHover: this.colorCodes[2],
                    fontColor: this.colorCodes[1],
                    borderColor: this.colorCodes[0],
                    edgeColor: this.colorCodes[0],
                    edgeColorHover: this.colorCodes[0],
                    tooltipBorderColor: this.colorCodes[0],
                    nodeTemplate: (content) => {
                        return `<div class="d-flex gap-2 align-items-center h-100 rounded-top-3 shadow-lg px-4">
                        <img class="size-8 rounded-circle" src='${content.imageURL}' alt=''>
                        <h6 class="fs-12 text-dark">${content.name}</h6>
                       </div>`;
                    },
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