
function doSearch() {
    const radioButtons = document.getElementsByName('searchType');
    const searchNumber = document.getElementById('searchNumber').value;
    
    let searchType;
    for(let i = 0; i < radioButtons.length; i++) {
        const searchTypeButton = radioButtons[i];
        if (searchTypeButton.checked) {
            searchType = searchTypeButton.value;
        }
    }
    switch(searchType) {
        case "linear":
            doLinearSearch(searchNumber);
            break;
        case "binary":
            if (!numArraySorted) {
                alert('To perform a binary search, the array must be sorted first.');
                break;
            }
            doBinarySearch(searchNumber);
            break;
    }
}

function doLinearSearch(searchNumber) {
    let i = 0;
    let foundIt = false;
    while (!foundIt && i <= numArray.length) {
        if (numArray[i] != searchNumber) i += 1
        else foundIt = true;
    }
    if (foundIt) alert(`Number found at position ${i+1}`)
    else alert('Number not found')
}

function doBinarySearch(searchNumber) {
    let lower = 0;
    let upper = numArray.length-1;
    let foundIt = false;
    let foundIndex;
    while (!foundIt || lower > upper) {
        let middle = Math.trunc((upper + lower) / 2);
        if (numArray[middle] == searchNumber) {
            foundIt = true;
            foundIndex = middle;  
        }
        else {
            if (searchNumber < numArray[middle]) {
                upper = middle - 1
            }
            else {
                lower = middle + 1
            }
        }
    }   
    if (foundIt) alert(`Number found at position ${foundIndex+1}`)
    else alert('Number not found')
}