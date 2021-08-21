
class MatrixOperations
{

    /**
     * @param {*} matrixA as Array
     * @param {*} matrixB as Array
     */
    static calculateSum(matrixA, matrixB) {
        const result = new Array();
    
        for (let row = 0; row < matrixA.length; row++) {
            const rowResult = new Array();
            
            for (let column = 0; column < matrixA[row].length; column++) {
                rowResult.push(
                    matrixA[row][column] + matrixB[row][column]
                )
            }
            result.push(rowResult)
        }
    
        return result
    }    
    
    /**
     * @param {*} matrixA as Array
     * @param {*} matrixB as Array
     * Used for AxB and BxA operations  <>
     */
    static calculateProduct(matrixA, matrixB) { 
        const result = new Array();
        
        for (let row = 0; row < matrixA.length; row++) {
            const rowResult = new Array();
            
            for (let columnB = 0; columnB < matrixB[0].length; columnB++) {
                let value = 0
    
                for (let rowB = 0; rowB < matrixB.length; rowB++) {
                    value += (matrixA[row][rowB] * matrixB[rowB][columnB])
                }
                rowResult.push(value)
            }
            result.push(rowResult)
        }
        return result
    }

    static calculateDeterminantOfMatrix2x2(matrix) {
        return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
    }

    static calculateDeterminantOfMatrix3x3(matrix) {

    }
     

}


// Test module:
// module.exports = {
//     calculateSum: calculateSum,
//     calculateProduct: calculateProduct
// }
