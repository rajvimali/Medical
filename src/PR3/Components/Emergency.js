import React from 'react'

const Emergency = () => {
    return (
        <>
            <section id="cta" class="emergency">
                <div class="container emergency-dsc p-5 text-white aos-init aos-animate" data-aos="zoom-in">

                    <div class="text-center">
                        <h3 className='fw-bold'>In an emergency? Need help now?</h3>
                        <p className='fs-5'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn rounded-pill btn-outline-light py-2 px-4"><a href="#appointment" className='text-decoration-none fw-bold'>Make an Make an Appointment</a></button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Emergency