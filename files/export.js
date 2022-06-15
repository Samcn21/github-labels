/*
Instructions
1. Navigate to desired GitHub repository.
2. Navigate to Issues tab.
3. Navigate to Labels link.
4. Open web browser Developer Tools
5. Navigate to the Console
6. Copy and Paste below code into the Console.
7. Save github-labels.json to a desired computer folder location.
*/

/**
 * @description Exports GitHub repository Issues labels to a JSON file
 *
 */
 (function () {
    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }

    function rgba2hex(rgba) {
        rgba = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
        return hex(rgba[1]) + hex(rgba[2]) + hex(rgba[3]);
    }

    // Process to export labels into a JSON object
    function getLabels() {
        const jsLabels = document.querySelectorAll('.js-label-link');

        if (!jsLabels || jsLabels.length < 1) {
            console.error('Unable to find GitHub labels');

            return;
        }

        const labels = [];

        [].slice.call(jsLabels).map(function (jsLabel) {
            labels.push({
                name: jsLabel.textContent.trim(),
                description: jsLabel.parentElement.nextElementSibling.firstElementChild.innerText.trim(),
                color: rgba2hex(window.getComputedStyle(jsLabel).getPropertyValue('background-color')),
            });
        });

        // Outputs labels to the Console
        console.log(JSON.stringify(labels, null, 2));

        return labels;
    }

    // Function save JSON object to a file
    function saveJSON(data, filename) {
        if (!data || data.length < 1) {
            console.error('No data');

            return;
        }

        const blob = new Blob([JSON.stringify(data, undefined, 4)], { type: 'text/json' });
        const e = document.createEvent('MouseEvents');
        const a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }

    // Saves labels to JSON file.
    saveJSON(getLabels(), 'github-labels.json');
})();