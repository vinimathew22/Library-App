import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p class="text-center fs-2 fw-semibold">ABOUT US</p>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://m.nca.edu.pk/images/library-m.jpg" class="d-block w-100" alt="..."></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://bibliolifestyle.com/wp-content/uploads/2022/02/2.png" class="d-block w-100" alt="..."></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://th-i.thgim.com/public/incoming/8xtjp4/article66982931.ece/alternates/FREE_1200/Coimbatore%20district%20library%203.jpg" class="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p>The Sunshine Public Library, established in 1996, is one of the biggest libraries in Pathanamthitta and is situated adjacent to the Post Office in the Pathanamthitta city.  It stocks over 1,50,000 books (growing at 500 titles annually) and 
                            subscribes to nearly 120 journals/periodicals/magazines. It also offers digital information services. Among its special collections, the Kerala Studies is a unique one. 
                            The special collections also include Women’s Studies, Government Publications, General Biographies, UN and World Bank Publications, bound volumes of newspapers and journals.</p>
                        <p>The Sunshine Public Library is complemented with a number of specialised Department Libraries and Study Centre Libraries. Our mission is to promote literacy, education, and a love for reading among our patrons. From a vast collection of 
                            books spanning various genres to engaging programs and events, we strive to create a welcoming space for everyone to explore, learn, and grow.</p>
                        <p>The creators of our library app, EpsilonTech Solutions, is a passionate company with a deep love for literature and innovation. With a background in technology and a keen understanding of the importance of libraries in the digital age, 
                            they envisioned a platform that would bring the richness of a traditional library into the digital realm. Their expertise in app development, combined with their commitment to promoting reading and learning, has resulted in a user-friendly and 
                            feature-rich app that caters to the needs of modern readers. The creator's goal is to make the library experience accessible to all, anytime and anywhere, fostering a community of book enthusiasts and lifelong learners. Thanks to their 
                            dedication, we can now carry a library in our pockets and explore the world of books with convenience and joy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
