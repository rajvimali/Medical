import React from 'react'
import about from '../Images/about.jpg'


const About = () => {
    return (
        <>
            <div className="aboutUs">
                <section id="about" class="about">
                    <div class="container aos-init aos-animate" data-aos="fade-up">

                        <div class="section-title">
                            <h2 className='fw-bold'>ABOUT US</h2>
                            <p className='fs-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right">
                                <img src={about} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 content ab-dsc aos-init aos-animate" data-aos="fade-left">
                                <h3 className='fw-bold'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul className='ab-list p-0 lh-lg'>
                                    <li><i class="fa-regular fa-circle-check fs-5"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i class="fa-regular fa-circle-check fs-5"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i class="fa-regular fa-circle-check fs-5"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default About