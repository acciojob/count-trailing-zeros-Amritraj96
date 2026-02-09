function trailingZeros(n) {
    n = Number(n); // convert input to number
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
