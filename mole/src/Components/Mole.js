import { useState } from 'react'
import Mole from '../mole.png'

const Moles = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={'./src/mole.png'} alt='mole.png' onClick={props.handleClick} />
        </div>
    )
}

export default Mole


