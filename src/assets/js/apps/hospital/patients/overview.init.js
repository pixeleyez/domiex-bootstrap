//Report Type Select
VirtualSelect.init({
    ele: "#reportTypeSelect",
    options: [
        { label: "X-Ray", value: "X-Ray" },
        { label: "Blood Test", value: "Blood Test" },
        { label: "MRI", value: "MRI" },
        { label: "CT Scan", value: "CT Scan" },
        { label: "Ultrasound", value: "Ultrasound" },
    ],
    allowNewOption: true,
});

//Recommendations Select
VirtualSelect.init({
    ele: "#recommendationsSelect",
    options: [
        { label: "N/A", value: "N/A" },
        { label: "Follow-up required", value: "Follow-up required" },
        { label: "Consult with surgeon", value: "Consult with surgeon" },
    ],
    allowNewOption: true,
});

//Status Select
VirtualSelect.init({
    ele: "#statusSelect",
    options: [
        { label: "Completed", value: "Completed" },
        { label: "In Progress", value: "In Progress" },
        { label: "Pending", value: "Pending" },
    ],
});