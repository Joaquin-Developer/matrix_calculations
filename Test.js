/**
 * Test module
 */

const operations = require("./MatrixOperations")
const matrixA = [[2,1],[-4,7]]
const matrixB = [[4,5,8,-3],[3,7,-1,6]];

const result = (operations.calculateProduct(matrixA, matrixB));

for (const iterator of result) {
    console.log(iterator);
}

