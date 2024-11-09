VirtualSelect.init({
    ele: '#sample-select',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
    selectedValue:0
  });
  
  VirtualSelect.init({
    ele: '#search-select',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
    selectedValue:0,
    search: true,
  });

  VirtualSelect.init({
    ele: '#multiple-select',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
    selectedValue:0,
    multiple: true,
  });

  VirtualSelect.init({
    ele: '#multipleWithoutSearchSelect',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    selectedValue:0,
    multiple: true,
    search: false,
  });

  VirtualSelect.init({
    ele: '#disabledOptionSelect',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    selectedValue:0,
    disabledOptions: [2, 6, 8]
  });

  VirtualSelect.init({
    ele: '#optionGroupSelect',
    options: [
      { 
        label: 'Option Group 1',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
          { label: 'Option 5', value: '5' },
          { label: 'Option 6', value: '6' },
          { label: 'Option 7', value: '7' },
          { label: 'Option 8', value: '8' },
        ]
      },
      { 
        label: 'Option Group 2',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
          { label: 'Option 5', value: '5' },
          { label: 'Option 6', value: '6' },
          { label: 'Option 7', value: '7' },
          { label: 'Option 8', value: '8' },
        ]
      },
    ],
    multiple: true,
    search: false,
  });

  VirtualSelect.init({
    ele: '#preselectValue',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    selectedValue:3,
  });

  VirtualSelect.init({
    ele: '#preselectMultipleValue',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    selectedValue: [3, 4],
    multiple: true,
  });


  VirtualSelect.init({
    ele: '#hideClearButton',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    selectedValue:0,
    hideClearButton: true,
  });

  VirtualSelect.init({
    ele: '#customWidthDropbox',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    selectedValue:0,
    dropboxWidth: '130px',
  });

  VirtualSelect.init({
    ele: '#allowNewOption',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    allowNewOption: true,
  });

  VirtualSelect.init({
    ele: '#markMatchedLabel',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    markSearchResults: true,
  });

  VirtualSelect.init({
    ele: '#showingSelectedOption',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    showSelectedOptionsFirst: true,
    multiple: true,
  });

  VirtualSelect.init({
    ele: '#aliasForSearching',
    options: [
      { label: 'Colors', value: 'colors', alias: 'Orange, Red' },
      { label: 'Fruits', value: 'fruits', alias: ['Orange', 'Apple'] },
      { label: 'Months', value: 'months', alias: 'January' },
      { label: 'Others', value: 'others' }
    ],
    selectedValue:0
  });

  VirtualSelect.init({
    ele: '#maximumValues',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
    ],
    maxValues: 4,
    multiple: true,
  });

  VirtualSelect.init({
    ele: '#labelDescription',
    options: [
      { label: 'Options 1', value: '1', description: 'Description 1' },
      { label: 'Options 2', value: '2', description: 'Description 2' },
      { label: 'Options 3', value: '3', description: 'Description 3' },
    ],
    hasOptionDescription: true,
    search: false,
  });

  VirtualSelect.init({
    ele: '#showOptionOnlySearch',
    options: [
      { label: 'Options 1', value: '1', description: 'Description 1' },
      { label: 'Options 2', value: '2', description: 'Description 2' },
      { label: 'Options 3', value: '3', description: 'Description 3' },
    ],
    showOptionsOnlyOnSearch: true,
  });

  VirtualSelect.init({ ele: 'select' });

  VirtualSelect.init({
    ele: '#sample-image',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
    selectedValue:0,
    labelRenderer: sampleLabelRenderer,
    selectedLabelRenderer: sampleLabelRenderer
  });

  function sampleLabelRenderer(data) {
    let prefix = '';
  

    if (!data.isCurrentNew && !data.isNew) {

      let flagIndex = data.value % flagClasses.length;
      prefix = `<i class="flag flag-${flagClasses[flagIndex]}"></i>`;
    } else {
    }
  
    return `${prefix}${data.label}`;
  }

  VirtualSelect.init({
    ele: '#popup-multi-select',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
      { label: 'Options 6', value: '6' },
      { label: 'Options 7', value: '7' },
      { label: 'Options 8', value: '8' },
      { label: 'Options 9', value: '9' },
      { label: 'Options 10', value: '10' },
    ],
    selectedValue:0,
    multiple: true,
    popupDropboxBreakpoint: '3000px'
  });

  VirtualSelect.init({
    ele: '#popup-single-select',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
    ],
    selectedValue:0,
    popupDropboxBreakpoint: '3000px'
  });
  

  VirtualSelect.init({
    ele: '#value-tag',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
      { label: 'Options 4', value: '4' },
      { label: 'Options 5', value: '5' },
    ],
    multiple: true,
    showValueAsTags: true,
  });
  