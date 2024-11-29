//category Select
VirtualSelect.init({
    ele: "#categorySelect",
    options: [
        { label: "Fashion", value: "Fashion" },
        { label: "Fruits", value: "fruits" },
        { label: "Footwear", value: "Footwear" },
        { label: "Bags", value: "Bags" },
        { label: "Watch", value: "Watch" },
    ],
    categorySelect: true,
    allowNewOption: true,
});

//category Select
VirtualSelect.init({
    ele: "#brandTypeSelect",
    options: [
        { label: "Gucci", value: "Gucci" },
        { label: "Rolex", value: "Rolex" },
        { label: "Calvin Klein", value: "Calvin Klein" },
        { label: "Zara", value: "Zara" },
        { label: "Nike", value: "Nike" },
        { label: "Adidas", value: "Adidas" },
    ],
    brandTypeSelect: true,
    allowNewOption: true,
});

VirtualSelect.init({
    ele: "#sizeSelect",
    options: [
        { label: "XS", value: "XS" },
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
        { label: "XL", value: "XL" },
        { label: "2XL", value: "2XL" },
    ],
    multiple: true,
    showValueAsTags: true,
});

//color select
VirtualSelect.init({
    ele: "#colorsSelect",
    options: [
        { label: "Blue", value: "Blue" },
        { label: "Green", value: "Green" },
        { label: "Yellow", value: "Yellow" },
        { label: "Sky", value: "Sky" },
        { label: "Red", value: "Red" },
        { label: "Pink", value: "Pink" },
        { label: "Gray", value: "Gray" },
        { label: "Purple", value: "Purple" },
    ],
    dropboxWrapper: 'body',
    multiple: true,
    showValueAsTags: true,
});

var swiper = new Swiper(".simplepaginationSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});