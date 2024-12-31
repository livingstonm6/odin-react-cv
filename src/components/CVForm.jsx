import { useState } from 'react';
import Display from "./Display.jsx";

function CVForm() {
    const [displayResume, setDisplayResume] = useState(false);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [school, setSchool] = useState('');
    const [schoolLocation, setSchoolLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [major, setMajor] = useState('');
    const [schoolStartDate, setSchoolStartDate] = useState('');
    const [schoolEndDate, setSchoolEndDate] = useState('')


    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobStartDate, setJobStartDate] = useState('');
    const [jobEndDate, setJobEndDate] = useState('');
    const [jobDescription, setJobDescription] = useState('');


    function handleSubmit(formData){
        console.log("Handling Submit");
        console.log(Object.fromEntries(formData));
        console.log("formData first name:");
        console.log(formData.get("first-name"));
        setName(formData.get("first-name") + " " + formData.get("last-name"));
        setAddress(formData.get("address"));
        setEmail(formData.get("email"));
        setPhone(formData.get("phone"));

        setSchool(formData.get("school"));
        setSchoolLocation(formData.get("school-location"));
        setDegree(formData.get("degree"));
        setMajor(formData.get("major"));
        setSchoolStartDate(formData.get("school-start-date"));
        setSchoolEndDate(formData.get("school-end-date"));

        setJobTitle(formData.get("job-title"));
        setCompany(formData.get("company"));
        setJobLocation(formData.get("job-location"));
        setJobStartDate(formData.get("job-start-date"));
        setJobEndDate(formData.get("job-end-date"));
        setJobDescription(formData.get("job-description"));

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
            <Display displayResume={displayResume} name={name} address={address} email={email} phone={phone}
            school={school} degree={degree} major={major} schoolStartDate={schoolStartDate} schoolLocation={schoolLocation}
            schoolEndDate={schoolEndDate} jobTitle={jobTitle} company={company} jobLocation={jobLocation}
            jobStartDate={jobStartDate} jobEndDate={jobEndDate} jobDescription={jobDescription}></Display>
        </div>
    )
}

export default CVForm;