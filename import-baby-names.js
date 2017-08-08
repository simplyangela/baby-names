var fs = require('fs') // fs-> file system lets us delete, create files, interact

fs.readFile('baby-names.csv', function (err,data) { // read this file and execute this function; call back function
    if (err) { // will show us the error and stop executing and tell you what the error is 
        console.log(err)
        throw err 
    }
    var parsedData = data.toString('utf-8') // reads us the error in buffer to string so humans can understand 
    var result = parsedData.split('\n').splice(1).map(function(intel) {
        var pieceOfData = intel.split(',')
        return {
            birthYear: parseInt(pieceOfData[0]),
            gender: pieceOfData[1],
            ethnicity: pieceOfData[2],
            name: pieceOfData[3], 
            count: parseInt(pieceOfData[4]), // need parseInt because it is a number and no longer a string
            rank: parseInt(pieceOfData[5]),
        }
    })
    console.log(result[0])
}) // will output a huge list when you run it in gitbash 
