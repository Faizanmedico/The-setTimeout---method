function incrementDigits(num, callback) {
    setTimeout(function() {
        num++;
        console.log(num);
        if (num < 10) {
            incrementDigits(num, callback);
        } else {
            callback();
        }
    }, 1000);
}

incrementDigits(0, function() {
    console.log('done!');
});

// This code is contributed by Sultan Ahmed Rasheed faizanmedico

