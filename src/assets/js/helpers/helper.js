function rgbToHex(rgb) {
    // Separate the RGB components
    const rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!rgbArray) {
        return rgb; // Return the original color if it's not in RGB format
    }
    // Convert each component to hexadecimal
    const hex = (x) => {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    };
    // Concatenate the hexadecimal components
    return "#" + hex(rgbArray[1]) + hex(rgbArray[2]) + hex(rgbArray[3]);
}

export function getColorCodes(dataset) {
    const chartColors = (document.documentElement.getAttribute("data-mode") === "light") ? dataset.chartColors : dataset.chartDarkColors ?? dataset.chartColors;
    const classNames = chartColors.replace(/^\[|\]$/g, '').split(',');
    const hashColorCodes = [];
    classNames.forEach(className => {
        const hasClass = document.querySelector(className);
        let backgroundColor;
        if (hasClass) {
            backgroundColor = window.getComputedStyle(hasClass).backgroundColor;
        } else {
            // Create a hidden element instead of appending it to the document body
            const divElement = document.createElement('div');
            divElement.className = className;
            divElement.style.visibility = 'hidden';
            document.body.appendChild(divElement);
            // Get the computed style once
            const styles = window.getComputedStyle(divElement);
            backgroundColor = styles.backgroundColor;
            // Remove the hidden element from the DOM
            document.body.removeChild(divElement);
        }
        // Convert RGB color to hexadecimal
        const hexColor = backgroundColor.includes('rgb') ? rgbToHex(backgroundColor) : backgroundColor;
        // Store the hexadecimal color code
        hashColorCodes.push(hexColor);
    });
    return hashColorCodes;
}