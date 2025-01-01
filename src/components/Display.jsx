function Display(props) {
        if (props.displayResume === false){
                return null;
        }
        return (
        <div className="display">
            <h1>{props.resumeData.name}</h1>
            <h4>{props.resumeData.address + " | " + props.resumeData.email + " | " + props.resumeData.phone}</h4>

            <h2>{props.resumeData.school}</h2>
            <h3>{props.resumeData.degree}</h3>
            <h4>{props.resumeData.schoolLocation}</h4>
            <h4>{props.resumeData.major}</h4>
            <h4>{props.resumeData.schoolStartDate} - {props.resumeData.schoolEndDate}</h4>

            <h1>{props.resumeData.jobTitle}</h1>
            <h2>{props.resumeData.company}</h2>
            <h4>{props.resumeData.jobLocation}</h4>
            <h4>{props.resumeData.jobStartDate} - {props.resumeData.jobEndDate}</h4>
            <p>{props.resumeData.jobDescription}</p>
        </div>
    )
}

export default Display;