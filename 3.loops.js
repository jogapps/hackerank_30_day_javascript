'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'i', 'o'];
    s = s.toLowerCase();
    let vowelArray = [];
    let consonantArray = [];
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            vowelArray.push(s[i]);
        } else {
            consonantArray.push(s[i]);
        }
    }
    let completeArrangement = vowelArray.concat(consonantArray);
    for(let j = 0; j < completeArrangement.length; j++)
        console.log(completeArrangement[j]);
}

