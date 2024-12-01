const fs = require('fs').promises;

async function loadCSVData(filename, leftList, rightList) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const rows = data.trim().split('\n');

        rows.forEach((row) => {
            const [col1, col2] = row.split(',');
            leftList.push(col1.trim());
            rightList.push(col2.trim());
        });
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

async function partOne() {
    const leftList = [];
    const rightList = [];

    await loadCSVData('input.csv', leftList, rightList);

    const sortedLeft = leftList.sort((a, b) => parseInt(a) - parseInt(b));
    const sortedRight = rightList.sort((a, b) => parseInt(a) - parseInt(b));

    let distance = 0;

    for (let i = 0; i < sortedLeft.length; i++)
        distance += Math.abs(sortedLeft[i] - sortedRight[i]);


    console.log("Final distance: ", distance);
}

async function partTwo() {
    const leftList = [];
    const rightList = [];

    await loadCSVData('input.csv', leftList, rightList);

    let similarity = 0;

    for (let i = 0; i < leftList.length; i++) {
        let count = 0;
        for (let j = 0; j < rightList.length; j++) {
            if (leftList[i] == rightList[j])
                count++;

        }
        similarity += leftList[i] * count;
    }

    console.log("Final similarity: ", similarity);
}

async function main() {
    console.log("PART ONE");
    await partOne();

    console.log("PART TWO")
    await partTwo();
}

main();