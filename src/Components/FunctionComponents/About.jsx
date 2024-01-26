import { useState } from "react";


const About = () => {
    const [college, updateCollege] = useState("KEC")
    const updatingClg = () => {
        updateCollege("KONGU ENGINEERING COLLEGE")
    }
    return (
        <div>
            <h2>This page is to know About Us</h2>
            <h1>Welcome to {college}</h1>
            <button onDoubleClick={updatingClg}>Update College Name</button>
        </div>
    )
}
export default About;