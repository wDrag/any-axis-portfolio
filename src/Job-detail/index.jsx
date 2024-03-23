import { useEffect, useState } from "react";
import axios from 'axios';

const JobDetail = () => {

    const queryString = window.location.search;

    const jobId = new URLSearchParams(queryString).get('jobId');

    console.log(jobId);

    const [jobDetailObject, setJobDetailObject] = useState({});


    useEffect(() => {
        const fetchJobDetail = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_ENDPOINT + '/careers/jobDetails/', {
                    params: {
                        jobId: jobId
                    }
                });
                setJobDetailObject(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchJobDetail();
    }, [])

    const [formData, setFormData] = useState({
        time: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: "",
        coverLetter: "",
        linkedin: "",
        website: "",
        jobId: jobId,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const now = new Date().toISOString();
        setFormData((prevState) => ({
            ...prevState,
            time: now
        }));
        try {
            const response = await axios.post(import.meta.env.VITE_API_ENDPOINT + '/careers/apply/', {
                formData
            });
            console.log(response.data);
            if (response.status === 200) {
                document.getElementById('successMsg').style.display = 'block';
                document.getElementById('failMsg').style.display = 'none';
            }
            else {
                document.getElementById('successMsg').style.display = 'none';
                document.getElementById('failMsg').style.display = 'block';
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="div-block-30">
            <div className="job-detail">
                <h1 className="heading-10-copy">{jobDetailObject.JobTitle}</h1>
                <div className="text-block-24">
                    {jobDetailObject.Location}
                </div>
                <div className="rich-text-block w-richtext">
                    <p className="paragraph">{jobDetailObject.JobDescription}</p>
                    <h3 className="heading-17">What you will do:</h3>
                    <p className="paragraph">{jobDetailObject.JobOccupation}</p>
                    <h3 className="heading-17">What you will need:</h3>
                    <p className="paragraph">{jobDetailObject.JobQualification}</p>
                    <h3 className="heading-17">About AnyAxis</h3>
                    <p className="paragraph">{jobDetailObject.AboutCompany}</p>
                </div>
            </div>
            <div id="w-node-_20dbc7fa-fdf0-9946-940f-ad84060bbb77-26dc4685">
                <div className="form-block-2 w-form">
                    <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="post"
                        // action={import.meta.env.VITE_API_ENDPOINT + '/careers/apply?jobId=' + jobId}
                        className="form-2"
                        data-wf-page-id="65a8d17eeefece8426dc4685"
                        data-wf-element-id="dc3b2927-afc0-9349-881a-e8fec5f4afa7"
                    >
                        <h1 className="heading-16">Apply for this job</h1>
                        <div className="div-block-31">
                            <input
                                className="text-field-2 w-input"
                                maxLength="256"
                                name="firstName"
                                data-name="First Name"
                                placeholder="First Name*"
                                type="text"
                                id="firstName"
                                required=""
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            <input
                                className="text-field-2 w-input"
                                maxLength="256"
                                name="lastName"
                                data-name="Last Name"
                                placeholder="Last Name*"
                                type="text"
                                id="lastName"
                                required=""
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input
                            className="text-field-2 w-input"
                            maxLength="256"
                            name="email"
                            data-name="Email"
                            placeholder="Email*"
                            type="email"
                            id="email"
                            required=""
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            className="text-field-2 w-input"
                            maxLength="256"
                            name="phone"
                            data-name="Phone"
                            placeholder="Phone"
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="resume" className="field-label-4">Resume/CV</label>
                        <input
                            className="text-field-2 resume w-input"
                            maxLength="256"
                            name="resume"
                            data-name="Resume"
                            placeholder="Attach Link"
                            type="text"
                            id="resume"
                            required=""
                            value={formData.resume}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="coverLetter" className="field-label-4">Cover Letter</label>
                        <input
                            className="text-field-2 resume w-input"
                            maxLength="256"
                            name="coverLetter"
                            data-name="Cover Letter"
                            placeholder="Attach Link"
                            type="tel"
                            id="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="linkedin" className="field-label-4">Linkedin Profile</label>
                        <input
                            className="text-field-2 resume w-input"
                            maxLength="256"
                            name="linkedin"
                            data-name="Linkedin Profile"
                            placeholder="Attach Link"
                            type="tel"
                            id="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="website" className="field-label-4">Website</label>
                        <input
                            className="text-field-2 resume w-input"
                            maxLength="256"
                            name="website"
                            data-name="Website"
                            placeholder="Attach Link"
                            type="tel"
                            id="website"
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                        <input
                            // type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                            onChange={() => { }}
                            data-wait="Please wait..."
                            className="submit-button-2 w-button"
                            value="Submit Application"
                        />
                    </form>
                    <div id="successMsg" className="success-message w-form-done">
                        <div className="text-block-23">
                            Thank you! Your submission has been received!
                        </div>
                    </div>
                    <div id="failMsg" className="error-message w-form-fail">
                        <div className="text-block-22">
                            Oops! Something went wrong while submitting the form.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail