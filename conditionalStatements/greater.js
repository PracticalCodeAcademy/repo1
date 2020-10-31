function main(num1, num2) {
    let greater;

    if (num1 >= num2)
        greater = num1;
    else
        greater = num2;

    let output = `Greater number: ${greater}`;
    console.log(output);
}
main(5, 8);