import { useEffect, useState } from "react"
import sound from './files/purge_alarm.wav'

function Timer({level, duration}){
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
                    <th>Small Blind: {level?.smallBlind || 0}</th>
                    <th>{getFormattedTime(time)}</th>
                    <th>Big Blind: {level?.bigBlind || 0}</th>
                    <th>Ante: {level?.ante || 0}</th>
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