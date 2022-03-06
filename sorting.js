
function doSort() {
    const radioButtons = document.getElementsByName('sortType');
    
    let sortType;
    for(let i = 0; i < radioButtons.length; i++) {
        const sortTypeButton = radioButtons[i];
        if (sortTypeButton.checked) {
            sortType = sortTypeButton.value;
        }
    }
    switch(sortType) {
        case "insertion":
            doInsertionSort();
            break;
        case "selection":
            doSelectionSort();
            break;
        case "bubble":
            doBubbleSort();
            break;
    }
}

function doBubbleSort() {
    let last = numArray.length;
    let swapped = true;
    while (swapped) {
        swapped = false;
        let i = 0;
        while (i < last) {
            if (numArray[i] > numArray[i+1]) {
                swap(numArray, i, i+1)
                swapped = true;
            }
            i += 1;
        }
        last -= 1;
    }
    numArraySorted = true;
    updateResultsBox();
}

function doSelectionSort() {
    let endUnsorted = numArray.length-1;
    while (endUnsorted > 1) {
        let i = 0;
        let maximum = numArray[i];
        let maximumPosition = i;
        while (i < endUnsorted) {
            i += 1;
            if (numArray[i] > maximum) {
                maximum = numArray[i];
                maximumPosition = i;
            }
        }
        swap(numArray, maximumPosition, endUnsorted)
        endUnsorted -= 1
    }

    numArraySorted = true;
    updateResultsBox();
}

function doInsertionSort() {
    let first = 0;
    let last = numArray.length - 1;
    let positionNext = last - 1;
    while (positionNext >= first) {
        let nextElement = numArray[positionNext];
        let currentPosition = positionNext;
        console.log('hsi')
        while ((currentPosition < last) && 
                (nextElement > numArray[currentPosition+1])) {
            currentPosition += 1;
            console.log('hi')
            numArray[currentPosition-1] = numArray[currentPosition];
        }
        numArray[currentPosition] = nextElement;
        positionNext -= 1;
    }

    numArraySorted = true;
    updateResultsBox();
}
