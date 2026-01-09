function generateRandomNmber(){
    return Math.floor(Math.random() * 100) + 1;
}
function celciousToFan(celcius){
    return (celcius * 9) / 5 + 32
}

module.exports = {generateRandomNmber, celciousToFan};