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
                    name: 'Ezekiel Halvorson',
                    imageURL: "assets/images/avatar/user-18.png",
                    borderColor: this.colorCodes[3],
                },
                children: [
                    {
                        id: 'Alex_Lee',
                        data: {
                            name: 'Erin Dicki',
                            imageURL: "assets/images/avatar/user-19.png",
                            borderColor: this.colorCodes[4],
                        },

                        children: [
                            {
                                id: 'Mia_Patel',
                                data: {
                                    name: 'Norval Murray',
                                    imageURL: "assets/images/avatar/user-20.png",
                                    borderColor: this.colorCodes[5],
                                },
                            },
                            {
                                id: 'Ryan_Clark',
                                data: {
                                    name: 'Oliver Boehm',
                                    imageURL: "assets/images/avatar/user-21.png",
                                    borderColor: this.colorCodes[5],
                                },
                            },
                            {
                                id: 'Zoe_Wang',
                                data: {
                                    name: 'Gino Prosacco',
                                    imageURL: "assets/images/avatar/user-22.png",
                                    borderColor: this.colorCodes[5],
                                },
                            },
                        ],
                    },
                    {
                        id: 'Leo_Kim',
                        data: {
                            name: 'Edgardo Kessler',
                            imageURL: "assets/images/avatar/user-23.png",
                            borderColor: this.colorCodes[6],
                        },

                        children: [
                            {
                                id: 'Ava_Jones',
                                data: {
                                    name: 'Marcos Stracke',
                                    imageURL: "assets/images/avatar/user-24.png",
                                    borderColor: this.colorCodes[7],
                                },
                            },
                            {
                                id: 'Maya_Gupta',
                                data: {
                                    name: 'Waylon Erdman',
                                    imageURL: "assets/images/avatar/user-25.png",
                                    borderColor: this.colorCodes[7],
                                },
                            },
                        ],
                    },

                    {
                        id: 'Max_Ruiz',
                        data: {
                            name: 'Eleanora Hayes',
                            imageURL: "assets/images/avatar/user-26.png",
                            borderColor: this.colorCodes[6],
                        },
                    },
                ],
            },
                this.treeOptions = {
                    contentKey: 'data',
                    width: '100%',
                    height: 600,
                    nodeWidth: 150,
                    nodeHeight: 70,
                    childrenSpacing: 70,
                    fontSize: '12px',
                    siblingSpacing: 30,
                    direction: 'bottom',
                    fontColor: this.colorCodes[1],
                    borderColor: this.colorCodes['#fff'],
                    edgeColor: this.colorCodes[0],
                    edgeColorHover: this.colorCodes['#fff'],
                    tooltipBorderColor: this.colorCodes[0],
                    nodeTemplate: (content) => {
                     
                        return `<div class="d-flex flex-column h-100"><div class="d-flex gap-2 align-items-center h-100 rounded-top-2 shadow-lg px-4">
                        <img class="size-8 rounded-circle" src='${content.imageURL}' alt=''>
                        <h6 class="fs-12 text-dark">${content.name}</h6>
                       </div><div class="mt-auto rounded-bottom" style='border-bottom: 10px solid ${content.borderColor}'></div></div>`;
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