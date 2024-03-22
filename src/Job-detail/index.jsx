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

    return (
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
    )
}

export default JobDetail