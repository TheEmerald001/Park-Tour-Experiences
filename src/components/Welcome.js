import React from "react";
import StarterData from "./StarterData";

function Welcome() {
    return(
        <React.Fragment>
            <div className="main">
                <div className="leftSide">
                    <h2>Tutembee Pamoja Kakamega</h2>
                        <div>
                            <h1 className="gradient">.</h1>
                                <span className="desc">
                                    Welcome to The Tropical Kakamega Rain Forest,
                                    a remnant of the rain forest that stretched all across Central Africa.
                                    Here, we pride in a variety of rare species of birds, butterflies, monkeys, and trees.
                                    Made rare by their availability in only the central regions of Africa, is a truly
                                    unique view of these species.
                                    Journey with us and cycle through the catalogue as you experience the exquisite views.
                                    You may also show cause by donating for your favourite species!
                                    To begin with, enter your name and select a trail.
                                </span>
                        </div>
                </div>
                <StarterData/>
            </div>
        </React.Fragment>
    )
}
export default Welcome;