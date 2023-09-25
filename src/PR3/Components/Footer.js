import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-info">
                                    <h3>Medicio</h3>
                                    <p className='text-muted'>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong className='text-muted'>Phone:</strong> +1 5589 55488 55<br />
                                        <strong className='text-muted'>Email:</strong> info@example.com<br />
                                    </p>
                                    <div class="social-links mt-3">
                                        <a href="#" class="twitter px-1 text-decoration-none"> <i class="fa-brands fa-twitter"></i></a>
                                        <a href="#" class="facebook px-1 text-decoration-none"> <i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" class="instagram px-1 text-decoration-none"> <i class="fa-brands fa-instagram"></i></a>
                                        <a href="#" class="google-plus px-1 text-decoration-none"> <i class="fa-brands fa-skype"></i></a>
                                        <a href="#" class="linkedin px-1 text-decoration-none"> <i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4 className='fs-5'>Useful Links</h4>
                                <ul className='p-0 lh-lg '>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Home</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> About us</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Services</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Terms of service</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Privacy policy</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4 className='fs-5'>Our Services</h4>
                                <ul className='p-0 lh-lg '>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Web Design</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Web Development</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Product Management</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Marketing</a></li>
                                    <li><i class="fa-solid fa-chevron-right"></i> <a href="#" className='text-decoration-none text-muted'> Graphic Design</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4 className='fs-5'>Our Newsletter</h4>
                                <p className='text-muted'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post"> <input type="email" name="email" className='border-0' /><input type="submit" value="Subscribe" /></form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div class="container text-muted">
                        <div class="copyright">
                            © Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
                        </div>
                        <div class="credits">
                            Designed by <a href="https://bootstrapmade.com/" className='text-decoration-none' style={{color:"#3fbbc0"}}>BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer