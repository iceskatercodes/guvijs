var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 }

function assertObjectsEqual(actual, expected, testName) {

    if (JSON.stringify(expected) == JSON.stringify(actual)) {
        console.log("Passed")
    } else {
        console.log(`FAILED ${testName} Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`)
    }
}

assertObjectsEqual(actual, expected, "test")