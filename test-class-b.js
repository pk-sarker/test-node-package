module.exports = class TestClassB {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    print() {
        console.log('Values: ' + this.a + ', ' + this.b + ', ' + this.c);
    }
}