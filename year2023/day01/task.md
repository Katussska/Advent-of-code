# Day 1: Trebuchet?!

Something is amiss in the global snow production, and you've been summoned to investigate. The Elves have graciously
provided you with a map marking the top fifty locations likely facing issues.

Your task is clear: you must inspect all fifty stars and restore snow operations before December 25th.

Collect stars by solving puzzles. Each day in the Advent calendar presents two puzzles; the second unlocks upon
completing the first, each granting a star. Best of luck!

As you inquire about alternatives like a weather machine ("not powerful enough"), your destination ("the sky"), and the
map's apparent emptiness ("you sure ask a lot of questions"), you realize the Elves are already loading you into a
trebuchet ("please hold still, we need to strap you in").

During the final adjustments, they discover their calibration document (your puzzle input) has been modified by a young
Elf eager to showcase her art skills. Consequently, the Elves are struggling to interpret the values on the document.

The updated calibration document consists of lines of text; each line initially held a specific calibration value that
the Elves now seek to recover. The calibration value on each line is derived by combining the first and last digits (in
that order) to form a two-digit number.

For example:

- `1abc2`
- `pqr3stu8vwx`
- `a1b2c3d4e5f`
- `treb7uchet`

In this example, the calibration values are 12, 38, 15, and 77, respectively. Their sum totals 142. Consider the entire
calibration document.

**What is the sum of all calibration values?**

# Part Two

Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two,
three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

- `two1nine`
- `eightwothree`
- `abcone2threexyz`
- `xtwone3four`
- `4nineeightseven2`
- `zoneight234`
- `7pqrstsixteen`

In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

**What is the sum of all of the calibration values?**