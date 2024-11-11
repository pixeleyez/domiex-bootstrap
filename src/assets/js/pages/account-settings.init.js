VirtualSelect.init({
    ele: '#language-select',
    options: [
      { label: 'English', value: '1' },
      { label: 'German', value: '2' },
      { label: 'French', value: '3' },
      { label: 'Russian', value: '4' },
    ],
    selectedValue:0,
    multiple: true,
  });
VirtualSelect.init({
    ele: '#currency-select',
    options: [
      { label: 'USD ($)', value: '1' },
      { label: 'Euro (€)', value: '2' },
      { label: 'Pound (£)', value: '3' },
      { label: 'JPY (¥)', value: '4' },
    ],
    selectedValue:0,
    multiple: true,
  });