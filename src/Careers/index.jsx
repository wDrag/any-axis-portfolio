import { useEffect, useState } from "react";
import axios from 'axios';

const Carreers = () => {

    const [CategoryList, setCategoryList] = useState([])

    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_ENDPOINT + '/careers');
                setCategoryList(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchCategoryList();
    }, []);

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
        </div>
    );
}

export default Carreers;