// 90-100: A , 80-89 B, 70 - 79 C, 60 - 69 D, 60-0 F, Enter a number

function main(score) {

    if (score >= 90) {
        console.log(` Score: ${score} -> Grade: A`)
    } else if (score >= 80) {
        console.log(` Score: ${score} -> Grade: B`)
    } else if (score >= 70) {
        console.log(` Score: ${score} -> Grade: C`)
    } else if (score >= 60) {
        console.log(` Score: ${score} -> Grade: D`)
    } else if (score >= 0) {
        console.log(` Score: ${score} -> Grade: F`)
    } else {
        console.log('Enter a valid number');
    }
}

main(73);