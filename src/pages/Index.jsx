import Meeting from "../components/Meeting"
import NewMeeting from "../components/newMeeting"
import { useLoaderData } from "react-router-dom"
import {useState} from 'react'

export default function Index(props) {
    const allMeetings = useLoaderData()

    const [buttonClicked, setButtonClicked] = useState(false)

    function handleNewSession()
    {
        setButtonClicked(false)
    }

    return (
        <div className="index-page flex">
            <div className="add-session-section flex">
                <button className='new-meeting-button' onClick={() => {setButtonClicked(true)}} >
                    <i class="fa-sharp fa-light fa-plus"> Add Session </i>
                </button>

                { buttonClicked ? 
                <div className="new-session-form-modal-backdrop flex">
                    <div className="new-session-form-modal-content">
                        <NewMeeting handleNewSession={handleNewSession} />
                    </div>
                </div>
                : null }

                
            </div>
            
            
            <div className="vertical-line"></div>

            <table className="all-sessions">
                <thead className="table-heading flex">
                    <h2>Date</h2>
                    <h2>Time</h2>
                    <h2>Title</h2>
                    <h2>Technology</h2>
                    <h2>Link</h2>
                </thead>
                {allMeetings.map((meeting, i) => <Meeting meeting={meeting} key={i}/>)}
            </table>
            
        </div>
    )
}