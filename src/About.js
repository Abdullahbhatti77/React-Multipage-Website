import React from "react";
import Footer from "./Footer";

function About(){
    return(
        <>
            {/* <Navbar /> */}
            <div class="container" style={{marginTop:100, marginBottom:150}}>
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img src="/images/img4.jpg" width={500} height={500}/>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h1>I am M Abdullah</h1>
                        <p style={{fontSize: 18, fontStyle:'italic'}}>Hi I am Abdullah. I am a passionate web developer. i have
                         two years of experience in wed designing. i love to create creative
                         designs which attract my clients to come again and again. customer
                         satisfaction is my first priority. i used to complete the work on
                         time so the clients never have to wait anymore.</p>

                         <p style={{fontSize: 18, fontStyle:'italic'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has survived not
                          only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem Ipsum passages,
                          and more recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    
                </div>

            </div>

            <Footer />


        </>
    );
}

export default About;