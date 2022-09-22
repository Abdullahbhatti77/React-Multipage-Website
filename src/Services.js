import React from "react";
import Footer from "./Footer";
import './Services.css';
import Cards from "./Cards";

function Services(){
    return(
        <>
            <h1 className="service">Skills</h1>
            <div class="container" style={{marginBottom:150}}>
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <Cards imgsrc="/images/mern.png"
                        title="Mern Stack"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam"
                          />
                    </div>      
                    <div class="col-12 col-lg-4">      
                        <Cards imgsrc="/images/frontend.png"
                        title="Front End Development"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam"
                          />

                    </div>
                    <div class="col-12 col-lg-4">
                        <Cards imgsrc="/images/img3.jpg"
                        title="Wordpress"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam"
                          />
                    </div>

                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/shopify.jpg"
                        title="Shopify"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam"
                          />
                    </div> 
                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/seo.jpg"
                        title="Search Engine optimization"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam"
                          />
                    </div>
                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/aws.png"
                        title="Amazon Web Services"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam"
                          />
                    </div> 

                </div>

            </div>

            <Footer />
        </>
    );
}
export default Services;