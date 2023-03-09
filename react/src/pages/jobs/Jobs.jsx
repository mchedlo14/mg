import React from "react";
import { Typewriter } from "react-simple-typewriter";
import searchIcon from "../../assets/svgs/search.svg";
import clockIcon from "../../assets/svgs/clock.svg";
import pinIcon from "../../assets/svgs/pin.svg";
import walletIcon from "../../assets/svgs/wallet.svg";
import { useNavigate } from "react-router";

const Jobs = () => {

    const router = useNavigate()
    
    return (
        <section className="w-75 mx-auto bg-yellow-400 mt-32">
            {/* title container */}
            <div className="w-75 h-3.75 bg-red-500 mx-auto flex items-center justify-between">
                <input placeholder="მაგ:გაყიდვების მენეჯერი" className="w-54 h-3.75 rounded-lg outline-0 pl-5 bg-jobsInputBg text-white"/>
                <input placeholder="მაგ:გაყიდვების მენეჯერი" className="w-54 h-3.75 rounded-lg outline-0 pl-5 bg-jobsInputBg text-white"/>
                <input placeholder="მაგ:გაყიდვების მენეჯერი" className="w-54 h-3.75 rounded-lg outline-0 pl-5 bg-jobsInputBg text-white"/>
                <input placeholder="მაგ:გაყიდვების მენეჯერი" className="w-54 h-3.75 rounded-lg outline-0 pl-5 bg-jobsInputBg text-white"/>

                <div className="flex items-center justify-center bg-sky-500 w-12 h-12 cursor-pointer">
                    <img src={searchIcon}/>
                </div>
            </div>

            {/* <div className="title-wrapper">
                <h3>
                    <Typewriter
                        words={[
                            "იპოვე შენი სამსახური!",
                            "განათავსე ვაკანსია აქ!",
                        ]}
                        loop={true}
                    />
                </h3>
                <p>
                    ჩვენს პლატფორმაზე მარტივად შეძლებ სასურველი სამსახურის
                    პოვნას
                </p>
            </div> */}


             
        </section>
    );
};

export default Jobs;
