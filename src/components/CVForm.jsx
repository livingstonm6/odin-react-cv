import { useState } from 'react';
import Display from "./Display.jsx";

function CVForm() {
    const [displayResume, setDisplayResume] = useState(false);

    const [resumeData, setResumeData] = useState({
        name: '',
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
            name: formData.get("first-name") + " " + formData.get("last-name"),
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

    return(
        <div className="app">
            <form action={handleSubmit}>
                <h1>Resume Creator</h1>
                <h2>Personal Information</h2>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" name="first-name" type="text"/>
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" name="last-name"type="text"/>
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text"/>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email"/>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel"/>

                <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input id="school" name="school" type="text"/>
                <label htmlFor="school-location">Location</label>
                <input id="school-location" name="school-location" type="text"/>
                <label htmlFor="degree">Degree</label>
                <input id="degree" name="degree" type="text"/>
                <label htmlFor="major">Area of Study (Major)</label>
                <input id="major" name="major" type="text"/>
                <label htmlFor="school-start-date">Start Date</label>
                <input id="school-start-date" name="school-start-date" type="date"/>
                <label htmlFor="school-end-date">End Date</label>
                <input id="school-end-date" name="school-end-date" type="date"/>

                <h2>Work Experience</h2>
                <label htmlFor="job-title">Job Title</label>
                <input id="job-title" name="job-title" type="text"/>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text"/>
                <label htmlFor="job-location">Location</label>
                <input id="job-location" name="job-location" type="text"/>
                <label htmlFor="job-start-date">Start Date</label>
                <input id="job-start-date" name="job-start-date" type="date"/>
                <label htmlFor="job-end-date">End Date:</label>
                <input id="job-end-date" name="job-end-date" type="date"/>
                <label htmlFor="job-description">Description</label>
                <input id="job-description" name="job-description" type="text"/>

                <button type="submit">Submit</button>
            </form>
            <Display displayResume={displayResume} resumeData={resumeData}></Display>
        </div>
    )
}

export default CVForm;