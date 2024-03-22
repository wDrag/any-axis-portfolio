import { useEffect, useState } from "react";

const JobDetail = () => {

    const queryString = window.location.search;

    const jobId = new URLSearchParams(queryString).get('jobId');

    console.log(jobId);

    const [jobDetailObject, setJobDetailObject] = useState({});


    useEffect(() => {
        setJobDetailObject({
            JobTitle: 'Senior Software Engineer',
            Location: 'SINGAPORE',
            JobDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum excepturi officiis repellat eveniet eaque dolores ipsam expedita corporis ducimus provident soluta rerum doloribus sunt, nulla quia nobis, delectus, nam fugit.',
            JobOccupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis, esse dolorum nemo sint iusto accusantium aliquam laborum odit, corporis asperiores, est nisi iure amet similique aspernatur voluptatum omnis. Maxime.',
            JobQualification: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis, esse dolorum nemo sint iusto accusantium aliquam laborum odit, corporis asperiores, est nisi iure amet similique aspernatur voluptatum omnis. Maxime.',
            AboutCompany: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum excepturi officiis repellat eveniet eaque dolores ipsam expedita corporis ducimus provident soluta rerum doloribus sunt, nulla quia nobis, delectus, nam fugit.'
        })
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