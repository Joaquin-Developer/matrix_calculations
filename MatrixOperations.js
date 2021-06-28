
/**
 * @param {*} matrixA as Array
 * @param {*} matrixB as Array
 */
function calculateSum(matrixA, matrixB) {
    const result = new Array();

    for (let row = 0; row < matrixA.length; row++) {
        let rowResult = new Array();
        
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
function calculateProduct(matrixA, matrixB) { 
    const result = new Array();
    const matA = JSON.parse(localStorage.getItem("matrixA"));
    const matB = JSON.parse(localStorage.getItem("matrixB"));
    
    for (let row = 0; row <= matA.length; row++) {
        
        

    }
    
    return result
}
