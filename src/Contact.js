import React, { useState } from "react";
import Footer from "./Footer";

function Contact(){

    const [user, setUser]=useState({
        name: '',
        email: '',
        subject: '',
        message:'',
    });

    let name, value;

    const getUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setUser({...user, [name]: value});
    };

    const postData=async(e)=>{
        e.preventDefault();

        const {name, email, subject, message}=user;

        const res=await fetch('https://reactwebsite-944c5-default-rtdb.firebaseio.com/reactwebsite.json',
         {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
            }),
        });

        if(res){
            setUser({
            name: '',
            email: '',
            subject: '',
            message:'',
            });
            
            alert('data stored');
        }
    };

    return(
        <>
            
            <section class="container mt-5" style={{marginBottom: 150}}>

                {/* <!--Section heading--> */}
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                {/* <!--Section description--> */}
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" method="POST">

                            {/* <!--Grid row--> */}
                            <div class="row">

                                {/* <!--Grid column--> */}
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" value={user.name} onChange={getUserData}/>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control" value={user.email} onChange={getUserData}/>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" value={user.subject} onChange={getUserData}/>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div class="row">

                                {/* <!--Grid column--> */}
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" value={user.message} onChange={getUserData}></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onClick={postData}>Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Block C,Phase 2,Johar Town, Lahore</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 92 3061564024</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>abdullahbhatti3399@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                </div>

            </section>

            <Footer />

        </>
    );
}

export default Contact;