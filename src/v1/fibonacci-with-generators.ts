function* fibonacciGenerator(startingPosition: number = 1): Generator {
    const positionZero: number = 0;
    if (startingPosition === 1) {
        yield positionZero;
    }

    const positionOne: number = 1;
    if (startingPosition <= 2) {
        yield positionOne;
    }

    let previousValue: number = positionZero
    let currentValue: number = positionOne;
    let nextValue: number;
    let currentPosition = 3;

    while (true) {
        nextValue = previousValue + currentValue;
        previousValue = currentValue;
        currentValue = nextValue;

        if (currentPosition >= startingPosition) {
            yield nextValue;
        } else {
            currentPosition += 1;
        }
    }
}

let fibonacci: Generator = fibonacciGenerator()
for (let i = 0; i < 10; i++) {
    console.log(fibonacci.next());
}
