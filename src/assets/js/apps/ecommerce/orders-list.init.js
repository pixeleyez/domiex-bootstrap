// Product Name Select
VirtualSelect.init({
    ele: "#productNameSelect",
    options: [
        { label: "Denim Jacket", value: "Denim Jacket" },
        { label: "Leather Wallet", value: "Leather Wallet" },
        { label: "Wireless Headphones", value: "Wireless Headphones" },
        { label: "Sunglasses", value: "Sunglasses" },
        { label: "Backpack", value: "Backpack" },
        { label: "Winter Coat", value: "Winter Coat" },
        { label: "Handbag", value: "Handbag" },
        { label: "Sweater", value: "Sweater" },
        { label: "Sports Watch", value: "Sports Watch" },
    ],
    allowNewOption: true,
});


// Payment Status Select
VirtualSelect.init({
    ele: "#paymentStatusSelect",
    options: [
        { label: "Paid", value: "Paid" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "COD", value: "COD" }
    ],
    allowNewOption: true,
});

// Order Status Select
VirtualSelect.init({
    ele: "#orderStatusSelect",
    options: [
        { label: "New", value: "New" },
        { label: "Pending", value: "Pending" },
        { label: "Shipping", value: "Shipping" },
        { label: "Delivered", value: "Delivered" }
    ],
    allowNewOption: true,
});