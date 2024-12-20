function CVForm() {
    return(
        <>
            <form>
                <h1>Resume Creator</h1>
                <h2>Personal Information</h2>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text"/>
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type="text"/>
                <label htmlFor="address">Address</label>
                <input id="address" type="text"/>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email"/>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel"/>

                <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input id="school" type="text"/>
                <label htmlFor="school-location">Location</label>
                <input id="school-location" type="text"/>
                <label htmlFor="degree">Degree</label>
                <input id="degree" type="text"/>
                <label htmlFor="major">Area of Study (Major)</label>
                <input id="major" type="text"/>
                <label htmlFor="school-start-date">Start Date</label>
                <input id="school-start-date" type="datetime-local"/>
                <label htmlFor="school-end-date">End Date</label>
                <input id="school-end-date" type="datetime-local"/>

                <h2>Work Experience</h2>
                <label htmlFor="job-title">Job Title</label>
                <input id="job-title" type="text"/>
                <label htmlFor="company">Company</label>
                <input id="company" type="text"/>
                <label htmlFor="job-location">Location</label>
                <input id="job-location" type="text"/>
                <label htmlFor="job-start-date">Start Date</label>
                <input id="job-start-date" type="datetime-local"/>
                <label htmlFor="job-end-date">End Date:</label>
                <input id="job-end-date" type="datetime-local"/>
                <label htmlFor="job-description">Description</label>
                <input id="job-description" type="text"/>

            </form>
        </>
    )
}

export default CVForm;