import React from 'react'
import Navbar from './Navbar'

const FAQ = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p class="text-center fs-2 fw-semibold">FAQs</p>
                            <p className="text-center">Frequently Asked Questions</p>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p>Find answers to common questions from our users! If you don't find your specific question listed, you can always reach out to customer 
                                support for further assistance. FAQs page is usually updated regularly whenever new features are added, when there are changes in policies or 
                                procedures, or when new common questions arise.
                            </p>                    
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Can I access audiobooks through the app?
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes, you can access audiobooks through our library app. We offer a wide selection of audiobooks that you can borrow and listen. Choose from various genres and authors available in our app.
                                        Stream audiobooks and podcasts and discover an extensive collection of exclusive titles, audio stories and originals.
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I renew borrowed books online?
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        To renew borrowed books online, you typically follow these steps:
                                            1. Open the library app on your device.
                                            2. Log in to your account using your credentials.
                                            3. Navigate to your borrowed items or checked-out books section.
                                            4. Look for an option that says "Renew" next to the book you wish to renew.
                                            5. Click on the "Renew" button to extend the loan period of the book.
                                            6. Confirm the renewal if prompted.
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Is there a limit on how many times I can renew?
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        There is a limit of eight consecutive renewals for the same book, but we allow multiple renewals as long as there are no holds on the book. For ebooks and audiobooks, however, 
                                        there are no limits on the number of times you can renew.
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Are there fees for overdue books?
                                    </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes, there are fees for overdue books. These fees are charged for any borrowed item after the due date. Overdue fines are ₹0.50 for each day the item is kept beyond the due date.
                                    </div>
                                    </div> 
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What is the process for suggesting a new book for the app to include?
                                    </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        To suggest a book for the library to purchase, you can usually follow these steps:
                                        1. Go to Settings and click on Book Suggestions.
                                        2. Fill out the book suggestion form provided. This form may ask for details such as the book title, author, publication year, and a brief description of why you think the library should acquire this book.
                                        3. Submit the form and we will reach out to you with further updates, if any.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ
