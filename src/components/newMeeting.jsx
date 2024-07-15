import { Form } from "react-router-dom"

export default function NewMeeting({handleNewSession}) {

    return (
        <div className="new-session-create-form">
            <Form onSubmit={handleNewSession} action="/sessions/create" method="post"> 
                <label htmlFor="title">
                    <input type="text" placeholder="Enter the title of the session" name="title" id="title" />
                </label>
                <label htmlFor="description">
                    <textarea placeholder="Enter the description of the session" name="description" id="description" />
                </label>
                <label htmlFor="host-name">
                    <input type="text" placeholder="Enter the Host name" name="host-name" id="host-name" />
                </label>
                <label htmlFor="technology">
                    <input type="text" placeholder="Enter the technology to be used during the session" name="technology" id="technology" />
                </label>
                <label htmlFor="date"> Session Date
                    <input type="date" name="date" id="date" />
                </label>
                <label htmlFor="time"> Session time
                    <input type="time" name="time" id="time" />
                </label>
                <label htmlFor="duration">
                    <input type="number" placeholder="Enter the duration of the session (in hours)" name="duration" id="duration" />
                </label>
                <label htmlFor="skill-level">
                    <select name="skill-level" defaultValue=""> 
                    {/* defaultValue="" Ensures the "placeholder" is selected by default */}
                        {/* This option acts as a placeholder */}
                        <option value="" disabled hidden>
                            Select Participant Skill Level
                        </option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">
                            Intermediate
                        </option>
                        <option value="Advanced">
                            Advanced
                        </option>
                    </select>
                </label>
                <label htmlFor="session-link">
                    <input type="text" placeholder="Enter the session link (Webex, Zoom etc.)" name="session-link" id="session-link" />
                </label>
                <label htmlFor="status">
                    <select name="status" defaultValue="">
                        <option value="" disabled hidden>
                            Indicate whether the session is Open for joining or Full
                        </option>
                        <option value="Open">Open</option>
                        <option value="Full">Full</option>
                    </select>
                </label>
                <div className="modal-buttons">
                    <button className="create-session-button">Create Session</button>
                    <button style={{"backgroundColor": "red"}} onClick={handleNewSession}>Close</button>
                </div>
            </Form>
        </div>
    )
}