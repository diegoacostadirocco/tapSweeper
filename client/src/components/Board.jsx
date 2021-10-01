import React from 'react'
import Square from './Square'


const Board = ({ dimensions, setChecked, checked }) => {

    if (isNaN(dimensions) || dimensions < 1 || dimensions > 100) {
        dimensions = 10;
        //alert("ingresar cantidad de celdas entre 1 y 100 ")

    }

    let squareSize = Math.ceil(Math.min(window.innerHeight - 100, window.innerWidth - 280) / dimensions);

    const board = [...Array(dimensions).keys()].map((row) =>
        // <table key={row} >
        <tbody key={row}>
            <tr key={row.toString()} className="board-row" >
                {[...Array(dimensions).keys()].map((col) =>
                    <td key={(row * col + col).toString()} style={{ borderRight: "hidden" }}>
                        <Square
                            onClickHandler={() => setChecked((actual) => [...actual, { col, row }])}
                            checked={checked.find((e) => e.col === col && e.row === row)}
                            size={squareSize} key={`${col}+${row}`} />
                    </td>
                )}
            </tr>
        </tbody>
        // </table>
    );

    return (
        <div>
            {board}
        </div>
    );
}
export default Board
