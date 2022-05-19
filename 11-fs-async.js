const {readFile, writeFile} = require('fs')

console.log('Start Here')
//we provide a call back thats how async works

    readFile('./content/first.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result;

            writeFile(
            './content/result-async.txt', 
            `Here is the result for Async: ${first}, ${second}`,
            (err, result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done with task')
            })
            console.log('Start all over')
    })
})