import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header flex">
            <h1>RTech Meetings</h1>
            
            <Link to="/">
                <button className="home-button">Home</button>
            </Link>
        </div>
    )
}