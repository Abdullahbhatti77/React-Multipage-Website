import React from "react";
import "./Home.css";
import Footer from "./Footer";

function Home(){
    return(
       <>
       
       <div className="home" style={{backgroundColor: '#fdd835'}}>
            <h1 class="display-4">M Abdullah</h1>
            <p>Web developer</p>
        </div>

        <div class="card testimonial-card container mt-5" style={{marginBottom: 150}} >

        {/* <!-- Background color --> */}
        <div class="card-up indigo lighten-1"></div>

        {/* <!-- Avatar --> */}
        <div class="avatar mx-auto white">
            <img src="/images/img4.jpg" class="rounded-circle" alt="men avatar" width={150} height={150}/>
        </div>

        {/* <!-- Content --> */}
        <div class="card-body">
            {/* <!-- Name --> */}
            <h4 class="card-title" style={{textAlign: "center"}}>M Abdullah</h4>
            <hr />
            {/* <!-- Quotation --> */}
            <p className="quote">"What really turned me
             over was the ability to understand how everything works without any prior knowledge."
            </p>
        </div>

        </div>
        {/* <!-- Card --> */}

        <Footer />

        </>

    );
}

export default Home;