let journal = [];

function addEntry(events, squirrel) {
    journal.push({ events, squirrel })
}

addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "pizza"], true);
addEntry(["work", "touched tree", "pizza", "running",
    "television"], true);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);
addEntry(["weekend", "pizza", "break", "peanuts",
    "pizza"], true);
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], false);
addEntry(["weekend", "pizza", "break", "peanuts",
    "pizza"], true);
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], true);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], false);
addEntry(["weekend", "cycling", "pizza", "peanuts",
    "pizza"], true);

console.log("Journal: ", journal)

let makeTable = function (eventName, journalArr) {
    let table = [0, 0, 0, 0]
    for (let i = 0; i < journalArr.length; i++) {
        if (journalArr[i].events.includes(eventName)) {
            if (journalArr[i].squirrel === true) {
                table[3]++
            } else {
                table[1]++
            }
        } else {
            if (journalArr[i].squirrel === true) {
                table[2]++
            } else {
                table[0]++
            }
        }
    }
    return table;
}

let table = makeTable("pizza", journal)

console.log("Table: ", table)

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));


}

console.log("Phi: ", phi(table));

//Ok let's look at all the events in the journal and find the one with the highest phi

let populateEventArr = function (journal) {
    let eventArr = [];

    for (let i = 0; i < journal.length; i++) {
        for (let j = 0; j < journal[i].events.length; j++) {
            if (!eventArr.includes(journal[i].events[j])) {
                eventArr.push(journal[i].events[j])
            }
        }
    }
    return eventArr;

}

let eventArr = populateEventArr(journal)

console.log(eventArr)

//we should have a full list of all the events now

let populatePhiObj = function (eventArr) {
    let phiObj = {};

    for (let i = 0; i < eventArr.length; i++) {
        phiObj[eventArr[i]] = phi(makeTable(eventArr[i], journal));
    }
    return phiObj
}

let phiObj = populatePhiObj(eventArr)

console.log(phiObj)


let getHighestPhi = function (phiObj) {
    let highestPhi = 0;
    let highestPhiEvent = ""

    for (item in phiObj) {
        if (phiObj[item] > highestPhi) {
            highestPhi = phiObj[item]
            highestPhiEvent = item
        }
    }

    return highestPhiEvent
}

console.log(getHighestPhi(phiObj))