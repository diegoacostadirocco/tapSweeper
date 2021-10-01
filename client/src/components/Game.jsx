import React, { useState } from 'react'

import APIS from '../api/index'
import Board from './Board'
import windows from '../assets/windows.jpg'


const Game = () => {
    const [dimensiones, setDimensiones] = useState(10);
    const [checked, setChecked] = useState([]);
    const [name, setName] = useState(null)
    const [_id, setId] = useState(null)

    const handleSubmit = async () => {
        if (!name || checked.length === 0) {
            alert("Por favor revisar nombre y que el tablero no sea nuevo")
            return;
        }
        await APIS.saveGame({ _id, name, board: checked })
        alert("juego Guardado!")
    }
    const handleGetGame = async () => {
        if (!name) {
            alert("ingrese nombre de la partida")
            return
        }
        const data = await APIS.getGame(name);
        setChecked(data.board)
        setName(data.name)
        setId(data._id)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: `url(${windows})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className={"game-info"}>
                <div>
                    <label>
                        elegi dimension del tablero(de 1 a 100)
                    </label>
                    <br />
                    <input type="number" id="dimensiones" value={dimensiones} onChange={(e) => { setDimensiones(parseInt(e.target.value)) }} />
                </div>
                <button
                    onClick={() => {
                        const dimensions = document.getElementById('dimensiones').value
                        if (!dimensions) {
                            return alert("ingresar dimensiones");
                        }
                        //setDimensiones(parseInt(dimensions));
                        setChecked([]);
                        setId(null);
                        setName(null);
                    }}>
                    Reset</button>
                <div className="buttons">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />

                    <button onClick={() => handleSubmit()}>guardar</button>
                    <button onClick={() => handleGetGame()} > cargar </button>
                </div>
            </div>
            {dimensiones && <Board dimensions={dimensiones} checked={checked} setChecked={setChecked} />}
        </div >
    )
}

export default Game
