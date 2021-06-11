// > < 
const divMatrixA = document.getElementsByClassName("matrixA")[0]
const divMatrixB = document.getElementsByClassName("matrixB")[0]

const sizeM_A = document.getElementsByClassName("sizeM_matrixA")[0]
const sizeM_B = document.getElementsByClassName("sizeM_matrixB")[0]
const sizeN_A = document.getElementsByClassName("sizeN_matrixA")[0]
const sizeN_B = document.getElementsByClassName("sizeN_matrixB")[0]

addEventListener("load", (event) => { })

document.getElementById("btngenerateValuesInputInterface")
.addEventListener("click", (event) => {
    event.preventDefault();
    generateValuesInputInterface(divMatrixA, sizeM_A.value, sizeN_A.value);
    generateValuesInputInterface(divMatrixB, sizeM_B.value, sizeN_B.value);
}, { once: true })

function generateValuesInputInterface(divMatrix, mSize, nSize) {
    const M = parseInt(mSize);   // rows
    const N = parseInt(nSize);   // columns
    const table = document.createElement("table");

    for (let i = 0; i < M; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < N; j++) {
            const column = document.createElement("th");
            const input = document.createElement("input")
            input.value = 0;
            input.type = "number"
            input.classList.add("valuesMatrixInput");

            column.appendChild(input)
            row.appendChild(column);
        }

        
        table.appendChild(row);
    }
    divMatrix.appendChild(table)

    // <table>
    //             <tr>  <!-- fila -->
    //                 <th>xd</th>  <!-- columna -->
    //                 <th>xd</th>
    //                 <th>xd</th>
    //                 <th>xd</th>
    //             </tr>
    //             <tr>
    //                 <th>xd</th>
    //                 <th>xd</th>
    //                 <th>xd</th>
    //                 <th>xd</th>
    //             </tr>
    //         </table>



}

