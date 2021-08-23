function processData(input) {
    // Enter your code here
    // Trim input to array
    input = input.trim().split('\n');
    
    let contacts = {};
    
    // Get key: value pairs and place in objects
    for(let i = 1; i <= parseInt(input[0]); i++) {
        // Split string into arrays
        let values = input[i].split(" ");
        contacts[values[0]] = values[1];
    }
    
    // check if key exists in contacts
    for(let i = parseInt(input[0]) + 1; i < input.length; i++) {
        if(contacts.hasOwnProperty(`${input[i]}`)) {
            console.log(`${input[i]}=${contacts[input[i]]}`);
        } else console.log("Not found");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
