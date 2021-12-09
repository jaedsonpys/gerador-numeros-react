import React, { useState } from "react"
import './styles/Numeros.css'

export default () => {

    function getNumbers() {
        var final = []

        for(var i = 0; i < 4; i++) {
            var number_1 = Math.floor(Math.random() * 8).toString()
            var number_2 = Math.floor(Math.random() * 8).toString()
            var number_3 = Math.floor(Math.random() * 8).toString()
            var number_4 = Math.floor(Math.random() * 8).toString()

            var all = number_1 + number_2 + number_3 + number_4
            final.push(all)
        }

        return final.join(' ')
    }

    const [number, setNumber] = useState('0000 0000 0000 0000')

    return (
        <div className="NumerosGerados">
            <div className="Painel">
                <p>{number}</p>
            </div>
            <div className="Actions">
                <button onClick={() => setNumber(getNumbers())}>Gerar</button>
            </div>
        </div>
    )
}