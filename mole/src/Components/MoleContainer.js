import { useEffect} from 'react'
import{ useState} from 'react' 
import EmptySlot from './EmptySlot.js'


    const MoleContainer = (props) => {
        let [theMole, setTheMole] = MoleContainer(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
    }
export default MoleContainer


