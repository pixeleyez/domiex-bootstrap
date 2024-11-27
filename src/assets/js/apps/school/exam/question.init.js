//Sort By select
VirtualSelect.init({
    ele: "#sortBySelect",
    options: [
        { label: "All", value: "All" },
        { label: "MCQ", value: "MCQ" },
        { label: "Q & A", value: "Q & A" },
        { label: "Hard", value: "Hard" },
        { label: "Normal", value: "Normal" },
        { label: "Medium", value: "Medium" },
    ],
});

//Item Type select
VirtualSelect.init({
    ele: "#itemTypeSelect",
    options: [
        { label: "MCQ", value: "MCQ" },
        { label: "Q & A", value: "Q & A" },
    ],
});

//Difficult Level select
VirtualSelect.init({
    ele: "#difficultLevelSelect",
    options: [
        { label: "Normal", value: "Normal" },
        { label: "Medium", value: "Medium" },
        { label: "Hard", value: "Hard" },
    ],
});

//Status select
VirtualSelect.init({
    ele: "#statusSelect",
    options: [
        { label: "New", value: "New" },
        { label: "Old", value: "Old" }
    ],
});
