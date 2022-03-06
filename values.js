function findMinimum() {
    let minIndex = 0
    let minimum = numArray[minIndex];
    let i = minIndex + 1;
    while (i < numArray.length) {
        if (numArray[i] < minimum) {
            minimum = numArray[i];
            minIndex = i;
        }
        i += 1;
    }
    alert(`The smallest value is ${minimum} at position ${minIndex+1}`)
}

function findMaximum() {
    let maxIndex = 0
    let maximum = numArray[maxIndex];
    let i = maxIndex + 1;
    while (i < numArray.length) {
        if (numArray[i] > maximum) {
            maximum = numArray[i];
            maxIndex = i;
        }
        i += 1;
    }
    alert(`The smallest value is ${maximum} at position ${maxIndex+1}`)
}

function findSum() {
    let i = 0;
    let total = 0;
    while (i < numArray.length) {
        total += numArray[i];
        i += 1;
    }
    alert(`The sum is ${total}`)
}

