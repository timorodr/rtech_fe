import { Link } from "react-router-dom"

export default function Meeting({ meeting }) {

    const id = meeting.url.split('/')[4]

    function getAMPM(time){
        // Convert 24 hour time format to 12 hour format
        let hour = Number(time.slice(0,2))
        let minute = time.slice(3,5)

        if (hour > 12 && hour < 24){  // 1 PM to 11 PM
            if ((hour-12) < 10) {
                let formattedHour = `0${hour-12}`
                time = `${formattedHour}:${minute} PM`
            } 
        }
        else if (hour === 0 || hour === 24){ // Midnight
            time = `12:${minute} AM`
        }
        else if (hour === 12) {  // 12 pm (noon)
            time = `${hour}:${minute} PM`
        }
        else {  // 1 AM to 11 AM
            // ensuring single-digit hours display as two digits for consistency
            if (hour < 10) {
                let formattedHour = `0${hour}`
                time = `${formattedHour}:${minute} AM`
            } 
            else {
                time = `${hour}:${minute} AM`
            }
        }
        return time
    }

    return (
        <div>
            <Link to={`/sessions/${id}`}>
                <div className="each-session flex">
                    <div className="session-column date-column"><h4>{meeting['date']}</h4></div>
                    <div className="session-column"><h4>{getAMPM(meeting['time'].slice(0,5))}</h4></div>
                    <div className="session-column"><h4>{meeting['title']}</h4></div>
                    <div className="session-column tech-column"><h4>{meeting['technology']}</h4></div>
                    <div className="session-column"><h4>{meeting['session_link']}</h4></div>
                </div>
                
            </Link>
        </div>
    )
}