for (let Number = 1; Number <= 100; Number += 1) {

    if ((Number % 3)==0) {
        console.log("Fizz");
    } else if ((Number % 5)==0) {
        console.log("Buzz");
    } else {
        console.log(Number);
    }
}
