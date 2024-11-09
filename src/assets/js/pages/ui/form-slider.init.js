var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

var valuesSlider = document.getElementById('values-slider');
var valuesForSlider = [1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32]; // 16 values

var format = {
    to: function(value) {
        return valuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return valuesForSlider.indexOf(Number(value));
    }
};

noUiSlider.create(valuesSlider, {
    start: [8, 24],
    // A linear range from 0 to 15 (16 values)
    range: { min: 0, max: valuesForSlider.length - 1 },
    // steps of 1
    step: 1,
    tooltips: true,
    format: format,
    pips: { mode: 'steps', format: format },
});

valuesSlider.noUiSlider.set(['7', '28']);

var arbitraryValuesSlider = document.getElementById('arbitrary-values-slider');
var arbitraryValuesForSlider = ['128MB', '256MB', '1GB', '8GB', '16GB', '32GB'];

var format = {
    to: function(value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

noUiSlider.create(arbitraryValuesSlider, {
    // start values are parsed by 'format'
    start: ['1GB', '16GB'],
    range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
    step: 1,
    tooltips: true,
    format: format,
    pips: { mode: 'steps', format: format, density: 50 },
});

    // Initialize the slider
    var slider = document.getElementById('color-slider');

    // Create the noUiSlider
    noUiSlider.create(slider, {
        start: [4000, 8000, 12000, 16000],
        connect: [false, true, true, true, true],
        range: {
            min: [2000],
            max: [20000]
        }
    });

    // Get the connect elements and apply colors
    var connectElements = slider.querySelectorAll('.noUi-connect');
    var colorClasses = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

    for (var i = 0; i < connectElements.length; i++) {
        connectElements[i].classList.add(colorClasses[i]);
    }

    var toggleSlider = document.getElementById('slider-toggle');

    noUiSlider.create(toggleSlider, {
        orientation: "vertical",
        start: 0,
        range: {
            'min': [0, 1],
            'max': 1
        },
        format: wNumb({
            decimals: 0
        })
    });
    
    toggleSlider.noUiSlider.on('update', function (values, handle) {
        if (values[handle] === '1') {
            toggleSlider.classList.add('off');
        } else {
            toggleSlider.classList.remove('off');
        }
    });

    
    var overlappingTooltipSlider = document.getElementById("overlapping-tooltip");
        noUiSlider.create(overlappingTooltipSlider, {
            start: [20, 32, 50, 70, 80, 90],
            connect: true,
            tooltips: [false, true, true, true, true, true],
            range: { min: 0, max: 100 }
        });

        positionOverlappingTooltips(overlappingTooltipSlider, 15, " - ");

        function positionOverlappingTooltips(slider, offset, separator) {
            const tooltips = slider.noUiSlider.getTooltips();
            const origins = slider.noUiSlider.getOrigins();

            tooltips.forEach((tooltip, index) => {
                if (tooltip) {
                    origins[index].appendChild(tooltip);
                }
            });

            slider.noUiSlider.on("update", function (values) {
                const positions = values.map((value) => parseFloat(value));
                positions.forEach((pos, idx) => {
                    if (tooltips[idx]) {
                        let tooltipPosition = (pos * 100) + "%";
                        tooltips[idx].style.left = tooltipPosition;

                        // Avoid overlap
                        if (idx < tooltips.length - 1 && pos >= positions[idx + 1] - offset) {
                            tooltipPosition = (pos - offset) + "%";
                        }
                        tooltips[idx].style.left = tooltipPosition;
                        tooltips[idx].innerHTML = pos + (idx < tooltips.length - 1 ? separator + positions[idx + 1] : '');
                    }
                });
            });
        }

        var resultElement = document.getElementById('result');
var sliders = document.querySelectorAll('.sliders');
var colors = [0, 0, 0];

sliders.forEach(function (slider, index) {

    noUiSlider.create(slider, {
        start: 127,
        connect: [true, false],
        orientation: "vertical",
        range: {
            'min': 0,
            'max': 255
        },
        format: wNumb({
            decimals: 0
        })
    });

    slider.noUiSlider.on('update', function () {

        colors[index] = slider.noUiSlider.get();

        var color = 'rgb(' + colors.join(',') + ')';

        resultElement.style.background = color;
        resultElement.style.color = color;
    });
});