//
// Created by katussska on 12/12/23.
//
#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

void part1(ifstream &fileName) {
    int count = 0;
    string line;

    while (getline(fileName, line)) {
        string number;
        for (int i = 0; i < line.length(); i++) {
            if (47 < line[i] && line[i] < 58) {
                number += line[i];
                break;
            }
        }

        for (int i = line.length() - 1; i >= 0; i--) {
            if (47 < line[i] && line[i] < 58) {
                number += line[i];
                break;
            }
        }

        count += stoi(number);
    }

    cout << "Part one: " << count << endl;
}

void part2(ifstream &fileName) {
    vector<string> numbers = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    vector<string> temp1 = numbers;
    vector<string> temp2 = numbers;
    int count = 0;
    string line;
    int cislo = 0;

    while (getline(fileName, line)) {
        cislo++;
        string number;
        string number2;
        for (int i = 0; i < line.length(); i++) {
            if (number != "\0")
                break;

            if (47 < line[i] && line[i] < 58) {
                number += line[i];
                temp1 = numbers;
                cout << cislo << ".cislo: " << line[i] << endl;
                break;
            }

            for (int j = 0; j < temp1.size(); j++) {
                if (temp1[j] == "0")
                    continue;

                bool allZero = true;
                for (const auto &s: temp1) {
                    if (s != "0") {
                        allZero = false;
                        break;
                    }
                }

                if (allZero) {
                    temp1 = numbers;
                    break;
                }


                if (line[i] != temp1[j][0]) {
                    temp1[j] = "0";
                } else if (line[i] == temp1[j][0]) {
                    if (temp1[j][1] != '\0') {
                        temp1[j].erase(temp1[j].begin());
                    } else {
                        number += to_string(j);
                        temp1 = numbers;
                        cout << cislo << ".string: " << j << endl;
                        break;
                    }
                }
            }
        }
        temp1 = numbers;


        for (int i = line.length() - 1; i >= 0; i--) {
            if (number2 != "\0")
                break;

            if (47 < line[i] && line[i] < 58) {
                number2 += line[i];
                temp2 = numbers;
                cout << cislo << ".cislo: " << line[i] << endl;
                break;
            }

            for (int j = 0; j < temp2.size(); j++) {
                bool allZero = true;
                for (const auto &s: temp2) {
                    if (s != "0") {
                        allZero = false;
                        break;
                    }
                }

                if (allZero) {
                    temp2 = numbers;
                    continue;
                }

                if (temp2[j] == "0")
                    continue;

                if (line[i] != temp2[j].back()) {
                    temp2[j] = "0";
                } else if (line[i] == temp2[j].back()) {
                    if (temp2[j].size() != 1) {
                        temp2[j].erase(temp2[j].size() - 1);
                    } else {
                        number2 += to_string(j);
                        temp2 = numbers;
                        cout << cislo << ".string: " << j << endl;
                        break;
                    }
                }
            }
        }
        temp2 = numbers;
        number += number2;
        count += stoi(number);
    }

    cout << "Part two: " << count << endl;
}

int main() {
    ifstream input("input");
    if (!input) {
        cout << "Could not open the file" << endl;
    }

    // part1(input);
    part2(input);
}