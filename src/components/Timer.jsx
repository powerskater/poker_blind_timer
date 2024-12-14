import { useEffect, useState } from "react"
import sound from './files/purge_alarm.wav'

function Timer({duration}){
    const [time, setTime] = useState(duration)
    let alarmAudio = new Audio(sound)
    useEffect(() => {
        if (time <= 0){
            alarmAudio.play()
            return
        }
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    function getFormattedTime(milliseconds){
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
        let total_minutes = parseInt(Math.floor(total_seconds / 60))

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)

        if(seconds == 0 && minutes == 0){
            
        }

        return `${minutes}:${seconds}`
    }



    return(
    <>
        {getFormattedTime(time)}
        <br/>
        <button type="button">Start/Stop</button>
    </>
    )
}

export default Timer