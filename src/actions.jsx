import { redirect } from "react-router-dom"

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newPet = {
        host_name: formData.get("host-name"),
        title: formData.get("title"),
        description: formData.get("description"),
        technology: formData.get("technology"),
        date: formData.get("date"),
        time: formData.get("time"),
        duration: formData.get("duration"),
        skill_level: formData.get("skill-level"),
        session_link: formData.get("session-link"),
        status: formData.get("status")
    }

    await fetch(`${URL}/sessions/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    })

    // redirect back to the index
    return redirect("/")
}

// Update Action
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()
    // get the meeting id
    const id = params.id
    // construct the request body
    const updatedMeeting = {
        host_name: formData.get("host-name"),
        title: formData.get("title"),
        description: formData.get("description"),
        technology: formData.get("technology"),
        date: formData.get("date"),
        time: formData.get("time"),
        duration: formData.get("duration"),
        skill_level: formData.get("skill-level"),
        session_link: formData.get("session-link"),
        status: formData.get("status")
    }
    // send the request body to the backend
    await fetch(`${URL}/sessions/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMeeting)
    })
    // redirect to the Index page
    return redirect("/")
}


// Delete Action
export const deleteAction = async ({params}) => {
    // get the session id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}/sessions/${id}/`, {
        method: "DELETE"
    })
    // redirect to the index page
    return redirect("/")
}