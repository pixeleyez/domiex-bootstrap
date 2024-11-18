// Status Select
VirtualSelect.init({
    ele: "#StatusSelect",
    options: [
        { label: "Published", value: "Published" },
        { label: "Coming Soon", value: "Coming Soon" },
        { label: "Expired", value: "Expired" }
    ],
});

//Event Type Select
VirtualSelect.init({
    ele: "#eventTypeSelect",
    options: [
        { label: "Offline", value: "Offline" },
        { label: "Online", value: "Online" }
    ],
});