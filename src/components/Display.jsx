function Display(props) {
        if (props.displayResume === false){
                return null;
        }
        return (
        <div className="display">
            <h1>{props.name}</h1>
            <h4>{props.address + " | " + props.email + " | " + props.phone}</h4>

            <h2>{props.school}</h2>
            <h3>{props.degree}</h3>
            <h4>{props.schoolLocation}</h4>
            <h4>{props.major}</h4>
            <h4>{props.schoolStartDate} - {props.schoolEndDate}</h4>

            <h1>{props.jobTitle}</h1>
            <h2>{props.company}</h2>
            <h4>{props.jobLocation}</h4>
            <h4>{props.jobStartDate} - {props.jobEndDate}</h4>
            <p>{props.jobDescription}</p>
        </div>
    )
}

export default Display;