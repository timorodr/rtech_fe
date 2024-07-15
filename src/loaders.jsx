// Base Url
const URL = import.meta.env.VITE_BASE_URL
console.log(URL)

// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}/sessions/`)
    const allMeetings = await response.json()
    return allMeetings
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}/sessions/${params.id}/`)
    const aMeeting = await response.json()
    return aMeeting
}