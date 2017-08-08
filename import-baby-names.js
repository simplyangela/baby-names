var fs = require('fs') // fs-> file system lets us delete, create files, interact

fs.readFile('baby-names.csv', function (err,data) { // read this file and execute this function; call back function
    if (err) { // will show us the error and stop executing and tell you what the error is 
        console.log(err)
        throw err 
    }
    var parsedData = data.toString('utf-8') // reads us the error in buffer to string so humans can understand 
    fs.writeFile('baby-name-copy.csv', "Hey Juri! How is it going?", function (err){
        if (err) {
            console.log(err)
        }
    })
}) // will output a huge list when you run it in gitbash 
