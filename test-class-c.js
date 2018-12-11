module.exports = class TestClassC {
    constructor() {
        this.sum = 0;
    }

    add(a, b) {
        return a + b;
    }
    addToSum (a) {
        this.sum += a;
    }
    getSum() {
        return this.sum;
    }
    inc(a) {
        return ++a;
    }
}