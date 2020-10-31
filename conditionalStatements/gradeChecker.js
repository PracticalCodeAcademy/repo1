function gradeCheaker(score) {

    if (score >= 65) {
        console.log('Pass the exam');
    } else if (score < 65)
        console.log('Failed the exam');
    else
        console.log('Enter a valid grade');
}

gradeCheaker('hi');