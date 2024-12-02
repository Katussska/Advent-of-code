# Day 2: Red-Nosed Reports 🎅🔬

## Part One 🎯

Fortunately, the first location The Historians want to search isn't a long walk from the **Chief Historian's office**.
🏢

While the **Red-Nosed Reindeer nuclear fusion/fission plant** ⚛️ appears to contain no sign of the Chief Historian, the
engineers 👷‍♂️👷‍♀️ there run up to you as soon as they see you. Apparently, they still talk about the time **Rudolph**
was saved through molecular synthesis from a single electron. 🔬

They're quick to add that—since you're already here—they'd really appreciate your help analyzing some **unusual data**
📊 from the Red-Nosed reactor. You turn to check if The Historians are waiting for you, but they seem to have already
divided into groups 👥 that are currently searching every corner of the facility. 🕵️‍♂️ You offer to help with the
unusual data.

### Task 📝

Analyze the unusual data from the engineers. **How many reports are safe?** 🤔🔍

### Example 📝

The **unusual data** (your puzzle input) consists of many **reports** 📝, one report per line. Each report is a list of
numbers called **levels** 🔢 that are separated by spaces. For example:

```aiignore
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

This example data contains six reports, each containing five levels.

The engineers are trying to figure out which reports are **safe** ✅. The Red-Nosed reactor safety systems 🛡️ can only
tolerate levels that are either **gradually increasing** ⬆️ or **gradually decreasing** ⬇️. So, a report only counts as
safe if both of the following are true:

1. The levels are either all **increasing** ⬆️ or all **decreasing** ⬇️.
2. Any two adjacent levels differ by at least **one** 1️⃣ and at most **three** 3️⃣.

In the example above, the reports can be found safe or unsafe by checking those rules:

- `7 6 4 2 1`: **Safe** ✅ because the levels are all decreasing by 1 or 2.
- `1 2 7 8 9`: **Unsafe** ❌ because `2 → 7` is an increase of 5.
- `9 7 6 2 1`: **Unsafe** ❌ because `6 → 2` is a decrease of 4.
- `1 3 2 4 5`: **Unsafe** ❌ because `1 → 3` is increasing, but `3 → 2` is decreasing.
- `8 6 4 4 1`: **Unsafe** ❌ because `4 → 4` is neither an increase nor a decrease.
- `1 3 6 7 9`: **Safe** ✅ because the levels are all increasing by 1, 2, or 3.

So, in this example, **2 reports** are safe. 🛡️✨

## Part Two 🎯

### Task 📝

### Example 📊

```aiignore

```

