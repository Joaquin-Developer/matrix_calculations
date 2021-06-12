
function calculateSum(valuesMatrixA, valuesMatrixB) {
    let result = new Array();

    for (let row = 0; row < valuesMatrixA.length; row++) {
        let rowResult = new Array();
        
        for (let column = 0; column < valuesMatrixA[row].length; column++) {
            rowResult.push(
                valuesMatrixA[row][column] + valuesMatrixB[row][column]
            )
        }
        result.push(rowResult)
    }

    return result
}

/**
 * @param {*} valuesMatrixA as Array
 * @param {*} valuesMatrixB as Array
 * Used for AxB and BxA operations
 */
function calculateAxB(valuesMatrixA, valuesMatrixB) { }


