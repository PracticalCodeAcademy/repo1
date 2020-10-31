function main(temp) {
    if (temp <= 0) {
        console.log('Freezing Weather !')
    } else if (temp > 100) {
        console.log('It is too hot !');
    } else {
        console.log('It is beuitful outside')
    }
}

main(100);