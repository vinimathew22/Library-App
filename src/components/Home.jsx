import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h4 class="text-center">WELCOME TO</h4>
                            <p class="text-center fs-1 fw-semibold">SUNSHINE PUBLIC LIBRARY</p>
                            <h5 class="text-center">Pathanamthitta, Kerala</h5>
                        </div>

                        <img src="https://i.pinimg.com/originals/78/53/59/785359fb8c8b19d6c021e8e8274ffee1.jpg" alt="" />
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p>Discover a world of knowledge and imagination at our library. Dive into our extensive collection of books, magazines, and more, waiting to be explored. Whether you're seeking a thrilling novel, a captivating non-fiction read, or resources for research, we have something for everyone!
                            Immerse yourself in a quiet and welcoming environment perfect for reading, studying, or simply escaping into a good book. Our library offers a variety of services, from borrowing materials to research assistance, all aimed at enriching your reading experience.
                            We offer a wide variety of genres to cater to a different reading preferences. Our mission is to promote literacy, education, and a love for reading among our patrons. From a vast collection of books spanning various genres to engaging programs and events, we strive to create a welcoming space for everyone to explore, learn, and grow. We strive to provide a diverse selection to cater to the reading interests of our visitors.</p>
                        <p class="text-center fs-4">Join us at the Sunshine Public Library, where learning and discovery await you!</p>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <p class="fst-italic">"A reader lives a thousand lives before he dies. The man who never reads lives only one."</p>
                                </blockquote>
                                <figcaption class="blockquote-footer"> George R. R. Martin </figcaption>
                            </figure>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p class="text-center fs-3 fw-semibold">Library Hours</p>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Days</th>
                                        <th scope="col">Timings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday to Friday</td>
                                        <td>8.00 a.m. to 8.00 p.m.</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9.00 a.m. to 6.00 p.m.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
