//Subscriber Select
VirtualSelect.init({
    ele: "#subscriberSelect",
    options: [
        { label: "Yes", value: "1" },
        { label: "No", value: "2" }
    ],
});

//status Select
VirtualSelect.init({
    ele: "#statusSelect",
    options: [
        { label: "Active", value: "1" },
        { label: "In Active", value: "2" },
    ],
});
//Subscriber Select Edit
VirtualSelect.init({
    ele: "#subscriberSelectEdit",
    options: [
        { label: "Yes", value: "1" },
        { label: "No", value: "2" }
    ],
    selectedValue: 1,
});

//status Select Edit
VirtualSelect.init({
    ele: "#statusSelectEdit",
    options: [
        { label: "Active", value: "1" },
        { label: "In Active", value: "2" },
    ],
    selectedValue: 1,
});