import { useEffect, useState } from "react"
import sound from './files/purge_alarm.wav'

function Timer({duration}){
    const [time, setTime] = useState(duration)
    const [isRunning, setIsRunning] = useState(false)
    let alarmAudio = new Audio(sound)
    useEffect(() => {
        if (!isRunning) {
            return
        }

        if (time <= 0){
            alarmAudio.play()
            return
        }
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time, isRunning])

    function getFormattedTime(milliseconds){
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
        let total_minutes = parseInt(Math.floor(total_seconds / 60))

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)

        if(seconds < 10){
            return `${minutes}:0${seconds}`
        }

        return `${minutes}:${seconds}`
    }
    
    function toggleTimer(){
        if (isRunning){
            setIsRunning(false)
        }
        else{
            setIsRunning(true)
        }
    }


    return(
    <>
        <table id="timer">
            <tbody>
                <tr>
                    <th><h2>Blinds</h2></th>
                    <th><h1>{getFormattedTime(time)}</h1></th>
                    <th><h2>Ante</h2></th>
                </tr>
            </tbody>
            
        </table>
        <button>Prev Blind</button>
        <button onClick={toggleTimer} type="button">{isRunning ? "Stop" : "Start"}</button>
        <button>Next Blind</button>
    </>
    )
}

export default Timer