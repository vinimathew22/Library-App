import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p class="text-center fs-2 fw-semibold">CONTACT US</p>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p>Need help? Contact us easily by filling the below contact form with user details and specify your query or grievance.
                                Our support team will reach out to you at the earliest with the best possible solution!
                            </p>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Subject</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Message</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">Submit</button>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            You can also access our customer care services by utilising the below contact information. Contact our customer care representative
                            for a seamless customer experience.
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Customer Care Representative</th>
                                        <td>Alice S. Thomas</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Phone</th>
                                        <td>+91-468-2308744, +91-468-2309231</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email ID</th>
                                        <td>customercarespl@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Address</th>
                                        <td>Catholicate College Rd, Pathanamthitta PO, Kerala</td>
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

export default Contact
