import * as fs from 'fs';
import * as readline from 'readline';

async function isSafeReport(numbers: number[]): Promise<boolean> {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i <= numbers.length; i++) {
        const diff = Math.abs(numbers[i] - numbers[i - 1]);

        if (diff < 1 || diff > 3)
            return false;

        if (numbers[i] > numbers[i - 1])
            isDecreasing = false;

        if (numbers[i] < numbers[i - 1])
            isIncreasing = false;
    }

    return isIncreasing || isDecreasing;
}

async function partOne() {
    const fileStream = fs.createReadStream('input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let sum = 0;

    for await (const line of rl) {
        const numbers = line.split(' ').map(Number);
        if (await isSafeReport(numbers))
            sum++;
    }

    console.log("Number of safe reports: ", sum);
}

async function main() {
    console.log("PART ONE");
    await partOne();
}

main();