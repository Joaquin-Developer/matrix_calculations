const divMatrixA = document.getElementsByClassName("matrixA")[0]
const divMatrixB = document.getElementsByClassName("matrixB")[0]
const selectOperation = document.getElementById("operation")

const sizeM_A = document.getElementsByClassName("sizeM_matrixA")[0]
const sizeM_B = document.getElementsByClassName("sizeM_matrixB")[0]
const sizeN_A = document.getElementsByClassName("sizeN_matrixA")[0]
const sizeN_B = document.getElementsByClassName("sizeN_matrixB")[0]

// addEventListener("load", (event) => { })

document.getElementById("btngenerateValuesInputInterface")
.addEventListener("click", (event) => {
    event.preventDefault();
    generateValuesInputInterface(divMatrixA, sizeM_A.value, sizeN_A.value);
    generateValuesInputInterface(divMatrixB, sizeM_B.value, sizeN_B.value);
    // save sizes:
    sessionStorage.setItem("size_m_A", sizeM_A.value);
    sessionStorage.setItem("size_n_A", sizeN_A.value);
    sessionStorage.setItem("size_m_B", sizeM_B.value);
    sessionStorage.setItem("size_n_B", sizeN_B.value);
}, { once: true });

function generateValuesInputInterface(divMatrix, mSize, nSize, matrixValues = null) {
    const M = parseInt(mSize);   // rows
    const N = parseInt(nSize);   // columns
    const table = document.createElement("table");
    table.classList.add("CurveBorder");

    for (let i = 0; i < M; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < N; j++) {
            const column = document.createElement("th");
            const input = document.createElement("input")
            if (matrixValues != null) {
                input.value = matrixValues[i][j];
            } else {
                input.value = 0;
            }
            input.type = "number"
            input.classList.add("valuesMatrixInput");
            column.appendChild(input)
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    divMatrix.appendChild(table)

    if (matrixValues != null) {
        document.getElementById("paragraphResult").style.display = "block";
    }
}

document.getElementById("btnCalculate").addEventListener("click", (event) => {
    event.preventDefault();
    const valuesMatrixA = getMatrixValues(divMatrixA);
    const valuesMatrixB = getMatrixValues(divMatrixB);

    if (selectOperation.selectedIndex == 0) { // A + B

        if (valuesMatrixA.length != valuesMatrixB.length ||
            valuesMatrixA[0].length != valuesMatrixB[0].length) {
            alert("La operacion no se puede realizar, las matrices son de distinta dimensión")
        } else {
            const divResult = document.getElementsByClassName("result")[0];
            const resultMatrix = calculateSum(valuesMatrixA, valuesMatrixB);
            const M = valuesMatrixA.length;
            const N = valuesMatrixA[0].length;
            generateValuesInputInterface(divResult, M, N, resultMatrix);

        }

    } else if (selectOperation.selectedIndex == 1) { // AB
        showResults(calculateAxB(valuesMatrixA, valuesMatrixB));

    } else if (selectOperation.selectedIndex == 2) { // BA
        showResults(calculateAxB(valuesMatrixB, valuesMatrixA));
    } 
    // add more operations ...

}, { once: true })

function showResults(resultValues) {
    console.log(resultValues);
    
    generateValuesInputInterface(divResult, )

}

/**
 * @param matrix as [object HTMLDivElement]
 */
function getMatrixValues(matrixElem) {
    const matrix = matrixElem.children[0];
    let matrixValues = new Array();

    for (let index = 0; index < matrix.childElementCount; index++)
    {
        let row = new Array();
        for (let j = 0; j < matrix.children[0].childElementCount; j++) {
            row.push(
                parseInt(matrix.children[index].children[j].children[0].value)
            );
        }
        matrixValues.push(row);
    }

    return matrixValues;
}
