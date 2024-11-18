function bookEventModal() {
    return {
        totalTickets: 0,
        pricePerTicket: 500.00,
        totalAmount: 0,
        calculatePrice() {
            // Calculate total amount
            this.totalAmount = (this.totalTickets * this.pricePerTicket).toFixed(2);
        }
    };
}
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