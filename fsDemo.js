import fs from 'fs/promises';


// //readFile() - callback
// fs.readFile('./test.tst', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// //readFileSync() - synchronous
// const data = fs.readFileSync('./test.tst', 'utf8');
// console.log(data);

// //readFile() -Promise .then() 
// fs.readFile('./test.tst', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// //readFile() -Async .then() 
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.tst', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



//Write FIle

async function writeFile() {
    try {
        await fs.writeFile('./test.tst', 'Hello, i am wrinteing to this file')
        console.log('File written to');
    } catch (error) {

    }
}


//append file
const appendFIle = async () => {
    try {
        await fs.writeFile('./test.tst', '\n append, i am appending to this file')
        console.log('file appended to');
    } catch (error) {

    }
}
writeFile()
appendFIle()
readFile()