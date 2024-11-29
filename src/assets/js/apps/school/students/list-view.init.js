document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector('.table');
    const headers = table.querySelectorAll('th');
    let sortOrder = {};

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTable(index, header);
        });
    });

    function sortTable(index, header) {
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const isNumericColumn = index === 0 || index === 3 || index === 7 || index === 8;

        const order = sortOrder[index] || 'asc';
        const newOrder = order === 'asc' ? 'desc' : 'asc';

        rows.sort((rowA, rowB) => {
            const cellA = rowA.cells[index].textContent.trim();
            const cellB = rowB.cells[index].textContent.trim();

            if (isNumericColumn) {
                return (parseFloat(cellA) - parseFloat(cellB)) * (newOrder === 'asc' ? 1 : -1);
            } else {
                return (cellA.localeCompare(cellB)) * (newOrder === 'asc' ? 1 : -1);
            }
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));

        sortOrder[index] = newOrder;

        headers.forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
        header.classList.add(newOrder === 'asc' ? 'sorted-asc' : 'sorted-desc');
    }
});

//sorting Select
VirtualSelect.init({
    ele: "#sortingByClass",
    options: [
        { label: "12 (A)", value: "12 (A)" },
        { label: "12 (B)", value: "12 (B)" },
        { label: "11 (A)", value: "11 (A)" },
        { label: "11 (B)", value: "11 (B)" },
        { label: "10 (A)", value: "10 (A)" },
        { label: "10 (B)", value: "10 (B)" },
        { label: "9", value: "9" },
        { label: "8", value: "8" }
    ],
});
