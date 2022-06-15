/**
 * 1. Update the labels JSON object.
 * 2. Open web browsers
 * 3. Navigate to desired GitHub repository.
 * 4. Navigate to Issues tab.
 * 5. Navigate to Labels link.
 * 6. Open web browser Developer Tools
 * 7. Navigate to the Console window.
 * 8. Copy and Paste the below code snippets into the Console window.
  */

 const labels = [
    {
        "name": "ANOTHER REVIEWER REQUIRED",
        "description": "When another specific reviewer is required, maybe due to more knowledge that the other reviewer has.",
        "color": "63ffed"
    },
    {
        "name": "APPROVED",
        "description": "When a PR is approved but still waiting for being merged for any reason",
        "color": "05ab05"
    },
    {
        "name": "CHANGE REQUEST",
        "description": "After the code review, the reviewer(s) request to change the code",
        "color": "ffc02e"
    },
    {
        "name": "CHILD BRANCH",
        "description": "The PR is not made to a mother branch and not to 3 main branches (develop, test or master)",
        "color": "c5def5"
    },
    {
        "name": "CODE REVIEW REQUEST",
        "description": "The PR is newly opened or it has been changed after a change request from the reviewer(s).",
        "color": "4ff0c0"
    },
    {
        "name": "COMMENT & QUESTION",
        "description": "When the reviewer(s) have questions or are in doubt that the pull request can be approved.",
        "color": "6b63ff"
    },
    {
        "name": "DECLINED",
        "description": "When the pull request is declined. The declined pull request should be closed.",
        "color": "000000"
    },
    {
        "name": "MERGE CONFLICT",
        "description": "There is a merge conflict that needs to be resolved in order to proceed with the PR.",
        "color": "ed2d2d"
    },
    {
        "name": "MOTHER BRANCH",
        "description": "it's a feature branch that the other branches create a pull request to.",
        "color": "fef2c0"
    },
    {
        "name": "NOT READY FOR REVIEW",
        "description": "When the pull request is opened but it is still in progress.",
        "color": "95c225"
    },
    {
        "name": "READY FOR MERGE",
        "description": "when a PR is ready for merge (resolved conflict, approved, reviewed etc).",
        "color": "00db5f"
    },
    {
        "name": "SCREENSHOTS REQUIRED",
        "description": "to show how the feature works or / and how it looks on multiple breakpoints.",
        "color": "fef2c0"
    },
    {
        "name": "VIDEO CAPTURING REQUIRED",
        "description": "to show how the feature works or / and how it looks on multiple breakpoints.",
        "color": "af3c9f"
    },
    {
        "name": "WIP",
        "description": "Work in progress",
        "color": "00ff00"
    },
    {
        "name": "WRONG BRANCH NAME",
        "description": "When the branch name is not correct!",
        "color": "b60205"
    },
    {
        "name": "WRONG PULL REQUEST",
        "description": "When the pull request is not pointing to the correct branch",
        "color": "ff6700"
    },
    {
        "name": "WRONG TITLE",
        "description": "When the pull request has a wrong title that does not match the naming convention!",
        "color": "a835a3"
    }
];

// Function to update an existing label
function updateLabel(label) {
    let flag = false;
    [].slice.call(document.querySelectorAll('.labels-list-item'))
        .forEach(function (element) {
            if (element.querySelector('.label-link').textContent.trim() === label.name) {
                flag = true;
                element.querySelector('.js-edit-label').click();
                element.querySelector('.js-new-label-name-input').value = label.name;
                element.querySelector('.js-new-label-description-input').value = label.description;
                element.querySelector('.js-new-label-color-input').value = '#' + label.color;
                element.querySelector('.js-edit-label-cancel ~ .btn-primary').click();
            }
        });
    return flag;
}

// Function to add a new label
function addNewLabel(label) {
    document.querySelector('.js-new-label-name-input').value = label.name;
    document.querySelector('.js-new-label-description-input').value = label.description;
    document.querySelector('.js-new-label-color-input').value = '#' + label.color;
    document.querySelector('.js-details-target ~ .btn-primary').disabled = false;
    document.querySelector('.js-details-target ~ .btn-primary').click();
}

// Function to add a new label
function addLabel(label) {
    if (!updateLabel(label)) {
        addNewLabel(label);
    }
}

// Importing labels from JSON.
// This one is not available natively in IE, but there are polyfills available.
Promise.resolve().then(function () {
    labels.forEach(function (label) {
        addLabel(label);
    });
});