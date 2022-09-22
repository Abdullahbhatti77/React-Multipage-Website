import React from "react";

function Cards(props){
    return(
    
        <>
        
            <div class="card">

                {/* <!-- Card image --> */}
                <div class="view overlay">
                    <img class="card-img-top" src={props.imgsrc}
                        alt="Card image cap" height={200} />
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                {/* <!-- Card content --> */}
                <div class="card-body">

                    {/* <!-- Title --> */}
                    <h4 class="card-title">{props.title}</h4>
                    {/* <!-- Text --> */}
                    <p class="card-text">{props.text}</p>

                </div>

            </div>

        </>
    );
}
export default Cards;