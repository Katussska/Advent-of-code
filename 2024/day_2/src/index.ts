import * as fs from 'fs';
import * as readline from 'readline';

async function isSafeReport(numbers: number[]): Promise<boolean> {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < numbers.length; i++) {
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
    const unsafeReports: number[][] = [];

    for await (const line of rl) {
        const numbers = line.split(' ').map(Number);
        if (await isSafeReport(numbers)) {
            sum++;
        } else {
            unsafeReports.push(numbers);
        }
    }

    console.log("Number of safe reports: ", sum);
    return unsafeReports;
}

async function isSafeWithDampener(numbers: number[]): Promise<boolean> {
    for (let i = 0; i < numbers.length; i++) {
        const modifiedNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1));
        if (await isSafeReport(modifiedNumbers)) {
            return true;
        }
    }
    return false;
}

async function partTwo(unsafeReports: number[][]) {
    let sum = 0;

    for (const report of unsafeReports) {
        if (await isSafeWithDampener(report)) {
            sum++;
        }
    }

    console.log("Number of safe reports with Problem Dampener: ", sum);
}

async function main() {
    console.log("PART ONE");
    const unsafeReports = await partOne();
    console.log("PART TWO");
    await partTwo(unsafeReports);
}

main();