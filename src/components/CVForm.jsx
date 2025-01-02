import { useState } from 'react';
import Display from "./Display.jsx";

function CVForm() {
    const [displayResume, setDisplayResume] = useState(false);

    const [resumeData, setResumeData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        schoolLocation: '',
        major: '',
        schoolStartDate: '',
        schoolEndDate: '',
        jobTitle: '',
        company: '',
        jobLocation: '',
        jobStartDate: '',
        jobEndDate: '',
        jobDescription: '',
    });

    function handleSubmit(formData){
        setResumeData({
            firstName: formData.get("first-name"),
            lastName: formData.get("last-name"),
            address: formData.get("address"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            school: formData.get("school"),
            schoolLocation: formData.get("school-location"),
            major: formData.get("major"),
            degree: formData.get("degree"),
            schoolStartDate: formData.get("school-start-date"),
            schoolEndDate: formData.get("school-end-date"),
            jobTitle: formData.get("job-title"),
            company: formData.get("company"),
            jobLocation: formData.get("job-location"),
            jobStartDate: formData.get("job-start-date"),
            jobEndDate: formData.get("job-end-date"),
            jobDescription: formData.get("job-description"),
        });

        setDisplayResume(true);
    }

    function handleEditButton(){
        setDisplayResume(false);
    }

    if (displayResume){
        return (
            <div className="resume">
                <Display displayResume={displayResume} resumeData={resumeData}></Display>
                <button onClick={handleEditButton}>Edit</button>
            </div>
        )
    }
    return(
        <div className="cv-form">
            <form action={handleSubmit}>
                <h1>Resume Creator</h1>
                <h2>Personal Information</h2>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" name="first-name" type="text" defaultValue={resumeData.firstName}/>
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" name="last-name" type="text" defaultValue={resumeData.lastName}/>
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" defaultValue={resumeData.address}/>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" defaultValue={resumeData.email}/>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" defaultValue={resumeData.phone}/>

                <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input id="school" name="school" type="text" defaultValue={resumeData.school}/>
                <label htmlFor="school-location">Location</label>
                <input id="school-location" name="school-location" type="text" defaultValue={resumeData.schoolLocation}/>
                <label htmlFor="degree">Degree</label>
                <input id="degree" name="degree" type="text" defaultValue={resumeData.degree}/>
                <label htmlFor="major">Area of Study (Major)</label>
                <input id="major" name="major" type="text" defaultValue={resumeData.major}/>
                <label htmlFor="school-start-date">Start Date</label>
                <input id="school-start-date" name="school-start-date" type="date" defaultValue={resumeData.schoolStartDate}/>
                <label htmlFor="school-end-date">End Date</label>
                <input id="school-end-date" name="school-end-date" type="date" defaultValue={resumeData.schoolEndDate}/>

                <h2>Work Experience</h2>
                <label htmlFor="job-title">Job Title</label>
                <input id="job-title" name="job-title" type="text" defaultValue={resumeData.jobTitle}/>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" defaultValue={resumeData.company}/>
                <label htmlFor="job-location">Location</label>
                <input id="job-location" name="job-location" type="text" defaultValue={resumeData.jobLocation}/>
                <label htmlFor="job-start-date">Start Date</label>
                <input id="job-start-date" name="job-start-date" type="date" defaultValue={resumeData.jobStartDate}/>
                <label htmlFor="job-end-date">End Date:</label>
                <input id="job-end-date" name="job-end-date" type="date" defaultValue={resumeData.jobEndDate}/>
                <label htmlFor="job-description">Description</label>
                <input id="job-description" name="job-description" type="text" defaultValue={resumeData.jobDescription}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CVForm;