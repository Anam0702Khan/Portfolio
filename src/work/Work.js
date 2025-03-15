
import React, { useState } from "react";
import "./Work.css";

const Work = () => {
    const experiences = [
        {
            id: 0,
            title: "Software Developer",
            subtitle: "Masheye Infotech Pvt. Ltd",
            content: [
                "Functional Enhancements: Key responsibilities include implementing new functionalities in the existing application to meet client acceptance criteria, ensuring continuous improvement.",
                " End-to-End Customer Solution: Developed a comprehensive solution enabling organizations to monitor drivers effectively, enhancing operational oversight.",
                " AI-Powered Driver Monitoring: Designed and developed an AI-driven system to track driver behavior, improving road safety and preventing accidents.",
                "Technology-Driven Safety Improvements: Passionate about leveraging cutting-edge AI to make driving safer, reducing risks and saving lives.",
            ],
        },
        {
            id: 1,
            title: "Full Stack Developer Intern",
            subtitle: "Croptr Technologies Pvt. Ltd",
            content: [
                "Introduction to Modular Programming: Designed and implemented modular programming concepts in real-world applications, focusing on effective designing and integration conventions.",
                 "User and Catalog Management Services: Developed robust user management and catalog management services to ensure seamless functionality and scalability",
            ],
        },
    ];

    const [selected, setSelected] = useState(null);

    return (
        <>
        <div className="section" id="work">
            <h5 className="title">My Work Experience</h5>
            <ul className="card-list">
                {experiences.map((exp) => (
                    <li key={exp.id}>
                        <button
                            className="list-btn"
                            onClick={() => setSelected(exp.id)}
                            data-bs-toggle="modal" data-bs-target="#workModal"
                        >
                            {exp.title} <i className="bi bi-arrow-right-short"></i>
                        </button>
                    </li>
                ))}
            </ul>
            </div>
            {/* Modal - Fully Controlled with React */}
              
                        <div class="modal fade " id="workModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div className="modal-dialog mw-100 m-5">
                        <div className="modal-content bg-dark">
                            <div className="modal-header justify-content-end">
                                <button
                                    className="bttn icon-bttn"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#workModal"
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row align-items-center p-4">
                                    <div className="col content">
                                        <h3>{experiences[selected]?.title}</h3>
                                        <p>{experiences[selected]?.subtitle}</p>
                                        {experiences[selected]?.content.map((con, index) => (
                                            <p key={index}>{con}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Overlay to close modal when clicked outside */}
                    {/* <div
                        className="modal-backdrop fade show"
                        onClick={() => setSelected(null)}
                    ></div> */}
                </div>
        </>

    );
};

export default Work;
