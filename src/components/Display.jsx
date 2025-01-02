function Display(props) {
        if (props.displayResume === false){
                return null;
        }
        return (
        <div className="display">
            <h1>{props.resumeData.firstName + " " + props.resumeData.lastName}</h1>
            <p>{props.resumeData.address + " | " + props.resumeData.email + " | " + props.resumeData.phone}</p>

            <h2>Education</h2>
            <p>{props.resumeData.school + " | " + props.resumeData.schoolLocation}</p>
            <p>{props.resumeData.degree}</p>
            <p>{props.resumeData.major}</p>
            <p>{props.resumeData.schoolStartDate} - {props.resumeData.schoolEndDate}</p>

            <h2>Work Experience</h2>
            <p>{props.resumeData.jobTitle}</p>
            <p>{props.resumeData.company + " | " + props.resumeData.jobLocation}</p>
            <p>{props.resumeData.jobStartDate} - {props.resumeData.jobEndDate}</p>
            <p>{props.resumeData.jobDescription}</p>
        </div>
    )
}

export default Display;