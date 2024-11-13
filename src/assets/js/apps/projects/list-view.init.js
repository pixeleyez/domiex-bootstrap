
VirtualSelect.init({
    ele: '#assignedSelect',
    options: [
        { label: "Max Boucaut", value: "Max Boucaut" },
        { label: "Natasha Tegg", value: "Natasha Tegg" },
        { label: "Ethan Zahel", value: "Ethan Zahel" },
        { label: "Ryan Frazer", value: "Ryan Frazer" },
        { label: "Julian Marconi", value: "Julian Marconi" },
        { label: "Poppy Dalley", value: "Poppy Dalley" }
    ],
    selectedValue:0,
    multiple: true,
  });

  VirtualSelect.init({
    ele: "#statusSelect2",
    options: [
        { label: "Active", value: "Active" },
        { label: "On Hold", value: "On Hold" },
        { label: "Pending", value: "Pending" },
        { label: "Completed", value: "Completed" }
    ],
});
  VirtualSelect.init({
    ele: "#filterStatusSelect",
    options: [
        { label: "Active", value: "Active" },
        { label: "On Hold", value: "On Hold" },
        { label: "Pending", value: "Pending" },
        { label: "Completed", value: "Completed" }
    ],
});

  VirtualSelect.init({
    ele: "#filterSelect",
    options: [
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
        { label: "Yearly", value: "Yearly" },
    ],
});