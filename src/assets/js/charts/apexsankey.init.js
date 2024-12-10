import { getColorCodes } from "../helpers/helper.js";

document.addEventListener("alpine:init", () => {
    Alpine.data("apexSankeyApp", () => ({
        init() {
            this.colorCodes = getColorCodes(this.$refs.apexSankeyContainer.dataset);
            this.initializeData();
            this.reloadSankey();
            // Reload sankey on window resize
            window.addEventListener('resize', this.reloadSankey.bind(this));
        },
        colorCodes: [],
        initializeData() {
            this.Data = {
                nodes: [
                    {
                        id: 'Oil',
                        title: 'Oil',
                    },
                    {
                        id: 'Natural Gas',
                        title: 'Natural Gas',
                    },
                    {
                        id: 'Coal',
                        title: 'Coal',
                    },
                    {
                        id: 'Fossil Fuels',
                        title: 'Fossil Fuels',
                    },
                    {
                        id: 'Electricity',
                        title: 'Electricity',
                    },
                    {
                        id: 'Energy',
                        title: 'Energy',
                    },
                ],
                edges: [
                    {
                        source: 'Oil',
                        target: 'Fossil Fuels',
                        value: 15,
                    },
                    {
                        source: 'Natural Gas',
                        target: 'Fossil Fuels',
                        value: 20,
                    },
                    {
                        source: 'Coal',
                        target: 'Fossil Fuels',
                        value: 25,
                    },
                    {
                        source: 'Coal',
                        target: 'Electricity',
                        value: 25,
                    },
                    {
                        source: 'Fossil Fuels',
                        target: 'Energy',
                        value: 60,
                    },
                    {
                        source: 'Electricity',
                        target: 'Energy',
                        value: 25,
                    },
                ],
            },
                this.graphOptions = {
                    nodeWidth: 20,
                    fontWeight: 500,
                    fontSize: '10px',
                    height: 300,
                    fontColor: this.colorCodes[2],
                    canvasStyle: '',
                    tooltipBGColor: this.colorCodes[1],
                    tooltipBorderColor: this.colorCodes[2],
                    nodeTemplate: (content) => {
                        `<div class="d-flex align-items-center gap-2">
                            <div class="size-3" style='background-color:${source.color}'></div>
                            <h6 class="text-dark dark:text-dark-100">${source.title}</h6>
                            <div>=></div>
                            <div class="size-3" style='background-color:${target.color}'></div>
                            <h6 class="text-dark dark:text-dark-100">${target.title}</h6>
                            <div>: ${value}</div> 
                        </div>`;
                    },
                }
        },
        renderSankey() {
            if (this.$refs.apexSankeyContainer) {
                this.$refs.apexSankeyContainer.innerHTML = ''; // Clear the container
            }
            // Initialize new sankey
            this.s = new ApexSankey(this.$refs.apexSankeyContainer, this.graphOptions);
            this.s.render(this.Data);
        },
        reloadSankey() {
            // Handle the logic for resizing
            this.renderSankey(); // Re-render sankey on resize
        },
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("apexSankeyNodeApp", () => ({
        init() {
            this.colorCodes = getColorCodes(this.$refs.apexSankeyNodeContainer.dataset);
            this.initializeData();
            this.reloadSankey();

            // Reload sankey on window resize
            window.addEventListener('resize', this.reloadSankey.bind(this));
        },
        colorCodes: [],
        initializeData() {
            this.Data2 = {
                nodes: [
                    { id: 'Applications', title: 'Applications' },
                    { id: 'Accepted', title: 'Accepted' },
                    { id: 'Rejected', title: 'Rejected' },
                    { id: 'In Progress', title: 'In Progress' },
                    { id: 'Software Engineering', title: 'Software Engineering' },
                    { id: 'Data Science', title: 'Data Science' },
                    { id: 'Marketing', title: 'Marketing' },
                    { id: 'Sales', title: 'Sales' },
                    { id: 'HR', title: 'HR' },
                    { id: 'Finance', title: 'Finance' },
                    { id: 'Internship', title: 'Internship' },
                    { id: 'Junior', title: 'Junior' },
                    { id: 'Mid-level', title: 'Mid-level' },
                    { id: 'Senior', title: 'Senior' },
                    { id: 'Entry Level', title: 'Entry Level' },
                    { id: 'Full-time', title: 'Full-time' },
                    { id: 'Part-time', title: 'Part-time' },
                ],
                edges: [
                    { source: 'Applications', target: 'Accepted', value: 10 },
                    { source: 'Applications', target: 'Rejected', value: 15 },
                    { source: 'Applications', target: 'In Progress', value: 10 },
                    { source: 'Accepted', target: 'Software Engineering', value: 4 },
                    { source: 'Accepted', target: 'Data Science', value: 2 },
                    { source: 'Accepted', target: 'Marketing', value: 1 },
                    { source: 'Accepted', target: 'Sales', value: 1 },
                    { source: 'Accepted', target: 'HR', value: 1 },
                    { source: 'Accepted', target: 'Finance', value: 1 },
                    { source: 'Rejected', target: 'Software Engineering', value: 5 },
                    { source: 'Rejected', target: 'Data Science', value: 3 },
                    { source: 'Rejected', target: 'Marketing', value: 2 },
                    { source: 'Rejected', target: 'Sales', value: 2 },
                    { source: 'Rejected', target: 'HR', value: 2 },
                    { source: 'Rejected', target: 'Finance', value: 1 },
                    { source: 'In Progress', target: 'Software Engineering', value: 3 },
                    { source: 'In Progress', target: 'Data Science', value: 2 },
                    { source: 'In Progress', target: 'Marketing', value: 2 },
                    { source: 'In Progress', target: 'Sales', value: 1 },
                    { source: 'In Progress', target: 'HR', value: 1 },
                    { source: 'In Progress', target: 'Finance', value: 1 },
                    { source: 'Software Engineering', target: 'Internship', value: 1 },
                    { source: 'Software Engineering', target: 'Junior', value: 1 },
                    { source: 'Software Engineering', target: 'Mid-level', value: 1 },
                    { source: 'Software Engineering', target: 'Senior', value: 1 },
                    { source: 'Software Engineering', target: 'Entry Level', value: 1 },
                    { source: 'Data Science', target: 'Internship', value: 1 },
                    { source: 'Data Science', target: 'Junior', value: 1 },
                    { source: 'Data Science', target: 'Mid-level', value: 1 },
                    { source: 'Data Science', target: 'Senior', value: 1 },
                    { source: 'Data Science', target: 'Entry Level', value: 1 },
                    { source: 'Marketing', target: 'Internship', value: 1 },
                    { source: 'Marketing', target: 'Junior', value: 1 },
                    { source: 'Marketing', target: 'Mid-level', value: 1 },
                    { source: 'Marketing', target: 'Senior', value: 1 },
                    { source: 'Marketing', target: 'Entry Level', value: 1 },
                    { source: 'Sales', target: 'Internship', value: 1 },
                    { source: 'Sales', target: 'Junior', value: 1 },
                    { source: 'Sales', target: 'Mid-level', value: 1 },
                    { source: 'Sales', target: 'Senior', value: 1 },
                    { source: 'Sales', target: 'Entry Level', value: 1 },
                    { source: 'HR', target: 'Internship', value: 1 },
                    { source: 'HR', target: 'Junior', value: 1 },
                    { source: 'HR', target: 'Mid-level', value: 1 },
                    { source: 'HR', target: 'Senior', value: 1 },
                    { source: 'HR', target: 'Entry Level', value: 1 },
                    { source: 'Finance', target: 'Internship', value: 1 },
                    { source: 'Finance', target: 'Junior', value: 1 },
                    { source: 'Finance', target: 'Mid-level', value: 1 },
                    { source: 'Finance', target: 'Senior', value: 1 },
                    { source: 'Finance', target: 'Entry Level', value: 1 },
                    { source: 'Internship', target: 'Full-time', value: 1 },
                    { source: 'Internship', target: 'Part-time', value: 1 },
                    { source: 'Junior', target: 'Full-time', value: 1 },
                    { source: 'Junior', target: 'Part-time', value: 1 },
                    { source: 'Mid-level', target: 'Full-time', value: 1 },
                    { source: 'Mid-level', target: 'Part-time', value: 1 },
                    { source: 'Senior', target: 'Full-time', value: 1 },
                    { source: 'Senior', target: 'Part-time', value: 1 },
                    { source: 'Entry Level', target: 'Full-time', value: 1 },
                    { source: 'Entry Level', target: 'Part-time', value: 1 },
                ],
            },
                this.graphOptions2 = {
                    nodeWidth: 20,
                    fontWeight: 500,
                    fontSize: '10px',
                    height: 300,
                    fontColor: this.colorCodes[0],
                    canvasStyle: '',
                    nodeBorderColor: this.colorCodes[2],
                    tooltipBGColor: this.colorCodes[1],
                    tooltipBorderColor: this.colorCodes[2],
                    edgeGradientFill: false,
                    nodeTemplate: (content) => {
                        `<div class="flex items-center gap-2">
                            <div class="size-3" style='background-color:${source.color}'></div>
                            <h6 class="dark:text-dark-100">${source.title}</h6>
                            <div>=></div>
                            <div class="size-3" style='background-color:${target.color}'></div>
                            <h6 class="dark:text-dark-100">${target.title}</h6>
                            <div>: ${value}</div> 
                        </div>`;
                    },
                }
        },

        renderSankey() {
            if (this.$refs.apexSankeyNodeContainer) {
                this.$refs.apexSankeyNodeContainer.innerHTML = ''; // Clear the container
            }
            // Initialize new sankey
            this.s = new ApexSankey(this.$refs.apexSankeyNodeContainer, this.graphOptions2);
            this.s.render(this.Data2);
        },
        reloadSankey() {
            // Handle the logic for resizing
            this.renderSankey(); // Re-render sankey on resize
        },
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("apexSankeyEdgeApp", () => ({
        init() {
            this.colorCodes = getColorCodes(this.$refs.apexSankeyEdgeContainer.dataset);
            this.initializeData();
            this.reloadSankey();

            // Reload sankey on window resize
            window.addEventListener('resize', this.reloadSankey.bind(this));
        },
        colorCodes: [],
        initializeData() {
            this.Data3 = {
                nodes: [
                    { id: 'England', title: 'england' },
                    { id: 'Wales', title: 'wales' },
                    { id: 'Level 4', title: 'level 4' },
                    { id: 'Level 3', title: 'level 3' },
                    { id: 'Level 2', title: 'level 2' },
                    { id: 'Level 1 and entry level', title: 'level 1 and entry level' },
                    { id: 'No qualifications', title: 'no qualifications' },
                    { id: 'Other', title: 'other' },
                    { id: 'Wholesale & retail', title: 'wholesale & retail' },
                    { id: 'Health & social work', title: 'health & social work' },
                    { id: 'Education', title: 'education' },
                    { id: 'Construction', title: 'construction' },
                    { id: 'Manufacturing', title: 'manufacturing' },
                    { id: 'Transport & storage', title: 'transport & storage' },
                    { id: 'Finance & insurance', title: 'finance & insurance' },
                ],
                edges: [
                    { source: 'England', target: 'Level 4', value: 13 },
                    { source: 'England', target: 'Level 3', value: 8 },
                    { source: 'England', target: 'Level 2', value: 8 },
                    { source: 'England', target: 'Level 1 and entry level', value: 6 },
                    { source: 'England', target: 'No qualifications', value: 3 },
                    // { source: 'England', target: 'Other', value: 4 },
                    { source: 'Wales', target: 'Level 4', value: 7 },
                    { source: 'Wales', target: 'Level 3', value: 8 },
                    { source: 'Wales', target: 'Level 2', value: 4 },
                    { source: 'Wales', target: 'Level 1 and entry level', value: 5 },
                    { source: 'Wales', target: 'No qualifications', value: 5 },
                    // { source: 'Wales', target: 'Other', value: 3 },
                    { source: 'Level 4', target: 'Wholesale & retail', value: 4 },
                    { source: 'Level 4', target: 'Health & social work', value: 3 },
                    { source: 'Level 4', target: 'Education', value: 2 },
                    { source: 'Level 4', target: 'Construction', value: 1 },
                    { source: 'Level 4', target: 'Manufacturing', value: 2 },
                    { source: 'Level 4', target: 'Other', value: 3 },
                    { source: 'Level 4', target: 'Transport & storage', value: 2 },
                    { source: 'Level 4', target: 'Finance & insurance', value: 3 },
                    { source: 'Level 3', target: 'Wholesale & retail', value: 3 },
                    { source: 'Level 3', target: 'Health & social work', value: 2 },
                    { source: 'Level 3', target: 'Education', value: 1 },
                    { source: 'Level 3', target: 'Construction', value: 2 },
                    { source: 'Level 3', target: 'Manufacturing', value: 1 },
                    { source: 'Level 3', target: 'Other', value: 3 },
                    { source: 'Level 3', target: 'Transport & storage', value: 2 },
                    { source: 'Level 3', target: 'Finance & insurance', value: 2 },
                    { source: 'Level 2', target: 'Wholesale & retail', value: 2 },
                    { source: 'Level 2', target: 'Health & social work', value: 1 },
                    { source: 'Level 2', target: 'Education', value: 2 },
                    { source: 'Level 2', target: 'Construction', value: 1 },
                    { source: 'Level 2', target: 'Manufacturing', value: 2 },
                    { source: 'Level 2', target: 'Other', value: 2 },
                    { source: 'Level 2', target: 'Transport & storage', value: 1 },
                    { source: 'Level 2', target: 'Finance & insurance', value: 1 },
                    { source: 'Level 1 and entry level', target: 'Wholesale & retail', value: 1 },
                    { source: 'Level 1 and entry level', target: 'Health & social work', value: 2 },
                    { source: 'Level 1 and entry level', target: 'Education', value: 1 },
                    { source: 'Level 1 and entry level', target: 'Construction', value: 2 },
                    { source: 'Level 1 and entry level', target: 'Manufacturing', value: 1 },
                    { source: 'Level 1 and entry level', target: 'Other', value: 2 },
                    { source: 'Level 1 and entry level', target: 'Transport & storage', value: 1 },
                    { source: 'Level 1 and entry level', target: 'Finance & insurance', value: 1 },
                    { source: 'No qualifications', target: 'Wholesale & retail', value: 1 },
                    { source: 'No qualifications', target: 'Health & social work', value: 1 },
                    { source: 'No qualifications', target: 'Education', value: 1 },
                    { source: 'No qualifications', target: 'Construction', value: 1 },
                    { source: 'No qualifications', target: 'Manufacturing', value: 1 },
                    { source: 'No qualifications', target: 'Other', value: 1 },
                    { source: 'No qualifications', target: 'Transport & storage', value: 1 },
                    { source: 'No qualifications', target: 'Finance & insurance', value: 1 },
                    // { source: 'Other', target: 'Wholesale & retail', value: 1 },
                    // { source: 'Other', target: 'Health & social work', value: 1 },
                    // { source: 'Other', target: 'Education', value: 1 },
                    // { source: 'Other', target: 'Construction', value: 1 },
                    // { source: 'Other', target: 'Manufacturing', value: 1 },
                    // // { source: 'Other', target: 'Other', value: 1 },
                    // { source: 'Other', target: 'Transport & storage', value: 1 },
                    // { source: 'Other', target: 'Finance & insurance', value: 1 }
                ],
            },
                this.graphOptions3 = {
                    nodeWidth: 20,
                    fontWeight: 500,
                    fontSize: '10px',
                    height: 300,
                    fontColor: this.colorCodes[0],
                    canvasStyle: '',
                    nodeBorderColor: this.colorCodes[2],
                    tooltipBGColor: this.colorCodes[1],
                    tooltipBorderColor: this.colorCodes[2],
                    edgeOpacity: 0.2,
                    nodeTemplate: (content) => {
                        `<div class="flex items-center gap-2">
                            <div class="size-3" style='background-color:${source.color}'></div>
                            <h6 class="dark:text-dark-100">${source.title}</h6>
                            <div>=></div>
                            <div class="size-3" style='background-color:${target.color}'></div>
                            <h6 class="dark:text-dark-100">${target.title}</h6>
                            <div>: ${value}</div> 
                        </div>`;
                    },
                }
        },

        renderSankey() {
            if (this.$refs.apexSankeyEdgeContainer) {
                this.$refs.apexSankeyEdgeContainer.innerHTML = ''; // Clear the container
            }
            // Initialize new sankey
            this.s = new ApexSankey(this.$refs.apexSankeyEdgeContainer, this.graphOptions3);
            this.s.render(this.Data3);
        },
        reloadSankey() {
            // Handle the logic for resizing
            this.renderSankey(); // Re-render sankey on resize
        },
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("apexSankeyFontApp", () => ({
        init() {
            this.colorCodes = getColorCodes(this.$refs.apexSankeyFontContainer.dataset);
            this.initializeData();
            this.reloadSankey();

            // Reload sankey on window resize
            window.addEventListener('resize', this.reloadSankey.bind(this));
        },
        colorCodes: [],
        initializeData() {
            this.Data4 = {
                nodes: [
                    { id: 'Berlin', title: 'Berlin' },
                    { id: 'Job Applications', title: 'Job Applications' },
                    { id: 'Barcelona', title: 'Barcelona' },
                    { id: 'Madrid', title: 'Madrid' },
                    { id: 'Amsterdam', title: 'Amsterdam' },
                    { id: 'Paris', title: 'Paris' },
                    { id: 'London', title: 'London' },
                    { id: 'Munich', title: 'Munich' },
                    { id: 'Brussels', title: 'Brussels' },
                    { id: 'Dubai', title: 'Dubai' },
                    { id: 'Dublin', title: 'Dublin' },
                    { id: 'Other Cities', title: 'Other Cities' },
                    { id: 'No Response', title: 'No Response' },
                    { id: 'Responded', title: 'Responded' },
                    { id: 'Rejected', title: 'Rejected' },
                    { id: 'Interviewed', title: 'Interviewed' },
                    { id: 'No Offer', title: 'No Offer' },
                    { id: 'Declined Offer', title: 'Declined Offer' },
                    { id: 'Accepted Offer', title: 'Accepted Offer' },
                ],
                edges: [
                    {
                        source: 'Berlin',
                        target: 'Job Applications',
                        value: 102,
                        color: '#dddddd',
                    },
                    {
                        source: 'Barcelona',
                        target: 'Job Applications',
                        value: 39,
                        color: '#dddddd',
                    },
                    {
                        source: 'Madrid',
                        target: 'Job Applications',
                        value: 35,
                        color: '#dddddd',
                    },
                    {
                        source: 'Amsterdam',
                        target: 'Job Applications',
                        value: 15,
                        color: '#dddddd',
                    },
                    {
                        source: 'Paris',
                        target: 'Job Applications',
                        value: 14,
                        color: '#dddddd',
                    },
                    {
                        source: 'London',
                        target: 'Job Applications',
                        value: 6,
                        color: '#dddddd',
                    },
                    {
                        source: 'Munich',
                        target: 'Job Applications',
                        value: 5,
                        color: '#dddddd',
                    },
                    {
                        source: 'Brussels',
                        target: 'Job Applications',
                        value: 4,
                        color: '#dddddd',
                    },
                    {
                        source: 'Dubai',
                        target: 'Job Applications',
                        value: 3,
                        color: '#dddddd',
                    },
                    {
                        source: 'Dublin',
                        target: 'Job Applications',
                        value: 3,
                        color: '#dddddd',
                    },
                    {
                        source: 'Other Cities',
                        target: 'Job Applications',
                        value: 12,
                        color: '#dddddd',
                    },
                    {
                        source: 'Job Applications',
                        target: 'No Response',
                        value: 189,
                        color: '#dddddd',
                    },
                    {
                        source: 'Job Applications',
                        target: 'Responded',
                        value: 49,
                        color: 'orange',
                    },
                    {
                        source: 'Responded',
                        target: 'Rejected',
                        value: 38,
                        color: '#dddddd',
                    },
                    {
                        source: 'Responded',
                        target: 'Interviewed',
                        value: 11,
                        color: 'orange',
                    },
                    {
                        source: 'Interviewed',
                        target: 'No Offer',
                        value: 8,
                        color: '#dddddd',
                    },
                    {
                        source: 'Interviewed',
                        target: 'Declined Offer',
                        value: 2,
                        color: '#dddddd',
                    },
                    {
                        source: 'Interviewed',
                        target: 'Accepted Offer',
                        value: 1,
                        color: 'orange',
                    },
                ],
                options: {
                    order: [
                        [
                            ['Berlin', 'Barcelona', 'Madrid', 'Amsterdam', 'Paris', 'London'],
                            ['Munich', 'Brussels', 'Dubai', 'Dublin', 'Other Cities'],
                        ],
                        [['Job Applications']],
                        [['Responded'], ['No Response']],
                        [['Interviewed'], ['Rejected']],
                        [['Accepted Offer', 'Declined Offer', 'No Offer'], []],
                    ],
                },
            },
                this.graphOptions4 = {
                    nodeWidth: 20,
                    fontWeight: 500,
                    fontSize: '10px',
                    height: 300,
                    fontColor: this.colorCodes[0],
                    canvasStyle: '',
                    nodeBorderColor: this.colorCodes[2],
                    tooltipBGColor: this.colorCodes[1],
                    tooltipBorderColor: this.colorCodes[2],
                    fontFamily: 'Satisfy, "cursive"',
                    nodeTemplate: (content) => {
                        `<div class="flex items-center gap-2">
                            <div class="size-3" style='background-color:${source.color}'></div>
                            <h6 class="dark:text-dark-100">${source.title}</h6>
                            <div>=></div>
                            <div class="size-3" style='background-color:${target.color}'></div>
                            <h6 class="dark:text-dark-100">${target.title}</h6>
                            <div>: ${value}</div> 
                        </div>`;
                    },
                }
        },

        renderSankey() {
            if (this.$refs.apexSankeyFontContainer) {
                this.$refs.apexSankeyFontContainer.innerHTML = ''; // Clear the container
            }
            // Initialize new sankey
            this.s = new ApexSankey(this.$refs.apexSankeyFontContainer, this.graphOptions4);
            this.s.render(this.Data4);
        },
        reloadSankey() {
            // Handle the logic for resizing
            this.renderSankey(); // Re-render sankey on resize
        },
    }));
});