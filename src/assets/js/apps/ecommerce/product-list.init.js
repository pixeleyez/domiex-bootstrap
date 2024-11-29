// Initialize Virtual Select
VirtualSelect.init({
    ele: "#sampleSelect",
    options: [
        { label: "All", value: "All" },
        { label: "Watch", value: "Watch" },
        { label: "Footwear", value: "Footwear" },
        { label: "Fashion", value: "Fashion" },
        { label: "Bags", value: "Bags" },
        { label: "Accessories", value: "Accessories" }
    ],
});


var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});