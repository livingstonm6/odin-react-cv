import Info from "./Info.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function CVForm(props) {
    return(
        <div className="cv-form">
            <Info></Info>
            <Education></Education>
            <Experience></Experience>
        </div>
    )
}

export default CVForm;