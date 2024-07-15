import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aMeeting = useLoaderData()
    
    const id = aMeeting?.url.split("/")[4]
     
    return (
            
        <div className="show-page-container flex">
            <div className="show-update-form">
                {/* Update and Show form together*/}
                <Form action={`/sessions/update/${id}`} method="post"> 
                    <label htmlFor="title"> Title:
                        <input type="text" defaultValue={aMeeting['title']} name="title" id="title" />
                    </label>
                    <label htmlFor="description"> Description:
                        <textarea defaultValue={aMeeting['description']} name="description" id="description" />
                    </label>
                    <label htmlFor="host-name"> Host:
                        <input type="text" defaultValue={aMeeting['host_name']} name="host-name" id="host-name" />
                    </label>
                    <label htmlFor="technology"> Technology:
                        <input type="text" defaultValue={aMeeting['technology']} name="technology" id="technology" />
                    </label>
                    <label htmlFor="date"> Session Date
                        <input type="date" defaultValue={aMeeting['date']} name="date" id="date" />
                    </label>
                    <label htmlFor="time"> Session time
                        <input type="time" defaultValue={aMeeting['time']} name="time" id="time" />
                    </label>
                    <label htmlFor="duration"> Duration:
                        <input type="number" defaultValue={aMeeting['duration']} name="duration" id="duration" />
                    </label>
                    <label htmlFor="skill-level"> Skill Level:
                        <select name="skill-level" defaultValue={aMeeting['skill_level']}> 
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </label>
                    <label htmlFor="session-link"> Session Link:
                        <input type="text" defaultValue={aMeeting['session_link']} name="session-link" id="session-link" />
                    </label>
                    <label htmlFor="status"> Status:
                        <select name="status" defaultValue={aMeeting['status']}>
                            <option value="Open" >Open</option>
                            <option value="Full">Full</option>
                        </select>
                    </label>
                    <button className="update-button">Update Session</button>
                </Form>

                {/* Delete Form */}
                <Form action={`/sessions/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Delete Session</button>
                </Form>
            </div>

        </div>
    )
}