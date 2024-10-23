
// Lite överskurs
// 11. Skapa en funktion wordFrequencyCounter som tar in en text och returnerar ett objekt som innehåller vilka ord som förekommer och hur många.
// Output: { javascript: 2, is: 2, fun: 2, and: 1, learning: 1, even: 1, more: 1 }

const text = "JavaScript is fun and learning JavaScript is even more fun";


function wordFrequencyCounter(text) {

    const words = text.split(" ");
    console.log(words)
    const frequency = {};

    words.forEach(function(word) {

        // Om ordet finns i objektet, öka med 1 
        if(frequency[word]) {
            frequency[word] += 1;
        } else {
        // Om ordet inte finns så ska vi lägga till en ny key med value = 0
        frequency[word] = 1;
        }
        console.log(frequency)
    });

    return frequency;
}

const result = wordFrequencyCounter(text);
//console.log(result)

