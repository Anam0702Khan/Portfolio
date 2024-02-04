import React, { useState } from 'react'

function Project() {
    const [selected, setSelected] = useState(0)
    const projects = [
        
        {
            id: 0,
            title: 'Jio Cinema Clone Project ',
            content: [
                'Extensive Content Library: It provides a vast library of movies, TV shows, documentaries, and original content across various genres.',
                'My Watch List: Users can create a personalized watchlist, adding titles they want to watch later.',
                'Cross - Device Compatibility: It is accessible on various devices, including smartphones, tablets, smart TVs, and computers that allows users to watch on any device.',
                'Video Player: Video player with controls for play, pause, and volume.',
                'TECH STACK : React, Javascript, HTML, CSS, Firebase '
            ],
            images: [
            'Screenshot (57).png',
            'Screenshot (58).png',
            'Screenshot (59).png',
            'Screenshot (63).png',
            'Screenshot (64).png',
            'Screenshot (65).png',
            'Screenshot (66).png'
           ],
        link: 'https://anam0702khan.github.io/jio-clone/',
        githublink: 'https://github.com/Anam0702Khan/Jio-Cinema-Clone---React-Project-1---0yzhq3r0pnt5'
       },
       {
        id: 1,
        title: 'LinkedIn Clone  Project',

        content: [
            'It is accessible on various devices  phones, tablets and computers.',
            'It has the feature to like a post and create a post.',
            'It has the feature to try premium.',
            'It has the feature to display the profile of the users.',
            'TECH STACK : React, Javascript, HTML, CSS, Material-Ui, Firebase '
        ],
        images: [
            'Screenshot (52).png',
            'Screenshot (56).png',
            'Screenshot (73).png',
            'Screenshot (54).png',
            'Screenshot (55).png'
        ],
        link: 'https://anam0702khan.github.io/LinkedIn-Clone---React-Project-2---nae1y51qfcg9/',
        githublink: 'https://github.com/Anam0702Khan/LinkedIn-Clone-React'
       },
       {
        id: 2,
        title :  'Movie Hall Project',
        content: [
            'It isfully-responsive work on any device.',
            'It maintains the record of the  booked seat number .',
            'It shows the user which seats are available to book and which are already occupied.',
            'TECH STACK : HTML, CSS, JavaScript, Bootstrap'
        ],
        images: [
            'Screenshot (67).png',
            'Screenshot (69).png',
            'Screenshot (70).png',
            'Screenshot (71).png',
            'Screenshot (72).png',
        ],
        link: 'https://anam0702khan.github.io/Movie-Booking-JS---JS-Major-Project-Movie-Booking---Post-Class---uxur4gigjwnw/',
        githublink: 'https://github.com/Anam0702Khan/Movie-Booking-JS---JS-Major-Project-Movie-Booking---Post-Class---uxur4gigjwnw'
       },
    ]
function handleProject(id) {
    setSelected(id)
}

return (
    <div>

        <div class="section" id="project">
            <h5 class="title">My Projects</h5>
            <ul class="card-list">
                {
                   projects &&  projects.map((project, id) => (
                        <li >
                            <button onClick={() => handleProject(id)} class="list-btn" data-bs-toggle="modal" data-bs-target="#projectModal">{project.title} <i class="bi bi-arrow-right-short"></i></button>
                        </li>
                    ))
                }

            </ul>
        </div>


        <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog mw-100 m-5">
                <div class="modal-content bg-dark">
                    <div class="modal-header justify-content-end">
                        <button class="bttn icon-bttn" data-bs-toggle="modal" data-bs-target="#projectModal"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="row align-items-center p-4">
                            <div class="col-lg-6">
                                <div id="carouselProject" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={projects[selected].images[0]} class="d-block w-100 h-100" alt="..." />
                                        </div>
                                        {
                                            projects[selected].images &&  projects[selected].images.map((item, index) => (
                                                index !== 0 ? <div class="carousel-item">
                                                    <img src={item} class="d-block w-100 h-100" alt="..." />
                                                </div> : " "

                                            ))
                                        }

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselProject" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselProject" data-bs-slide="next">
                                        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-6 content">
                                <h3>{projects[selected].title}</h3>
                                {
                                    projects[selected].content.map((item, index) => (
                                        <p>{item} </p>

                                    ))
                                }
                                <a class="bttn" href={projects[selected].githublink} >Github Code<i class="bi bi-github"></i></a>
                                <a class="bttn" href={projects[selected].link} target="blank" >View Project <i class="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Project