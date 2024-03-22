
const Carreers = () => {

    const CategoryList = [
        {
            CategoryName: `Engineering & Trading`,
            JobsList: [
                {
                    JobTitle: `Senior Software Engineer`,
                    Location: `SINGAPORE`,
                    id: 1
                },
                {
                    JobTitle: `Senior Software Engineer`,
                    Location: `SINGAPORE`,
                    id: 2
                },
                {
                    JobTitle: `Senior Software Engineer`,
                    Location: `SINGAPORE`,
                    id: 3
                }
            ]
        },
        {
            CategoryName: `Finance & Accounting`,
            JobsList: [
                {
                    JobTitle: `Finance Manager`,
                    Location: `SINGAPORE`,
                    id: 4
                },
                {
                    JobTitle: `Finance Manager`,
                    Location: `SINGAPORE`,
                    id: 5
                },
                {
                    JobTitle: `Finance Manager`,
                    Location: `SINGAPORE`,
                    id: 6
                }
            ]
        }

    ];

    return (
        <div className="container2">
            <h1 className="heading-9 left">Open Positions</h1>
            {CategoryList.map((category, index) => {
                return (
                    <div key={index} className="job-category">
                        <h1 className="heading-10">{category.CategoryName}</h1>
                        {category.JobsList.map((job, index) => {
                            return (
                                <a
                                    key={index}
                                    href={`../career-details/careers-details.html?jobId=${job.id}`}
                                    className="job w-inline-block"
                                >
                                    <div className="div-block-24">
                                        <div className="textblockk">{job.JobTitle}</div>
                                        <div className="caption">{job.Location}</div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                );
            })}
            {/* <div className="job-category">
                <h1 className="heading-10">Engineering &amp; Trading</h1>
                <a
                    href="../career-details/careers-details.html"
                    className="job w-inline-block"
                >
                    <div className="div-block-24">
                        <div className="textblockk">Senior Software Engineer</div>
                        <div className="caption">SINGAPORE</div>
                    </div>
                </a>
                <div className="job">
                    <div className="div-block-24">
                        <div className="textblockk">Senior Software Engineer</div>
                        <div className="caption">SINGAPORE</div>
                    </div>
                </div>
                <div className="job">
                    <div className="div-block-24">
                        <div className="textblockk">Senior Software Engineer</div>
                        <div className="caption">SINGAPORE</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Carreers;