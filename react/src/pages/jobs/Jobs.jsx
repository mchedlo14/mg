import React from "react";
import { Typewriter } from "react-simple-typewriter";
import searchIcon from "../../assets/svgs/search.svg";
import clockIcon from "../../assets/svgs/clock.svg";
import pinIcon from "../../assets/svgs/pin.svg";
import walletIcon from "../../assets/svgs/wallet.svg";

import JobsForm from "../../components/jobsform/JobsForm";
const Jobs = () => {
    return (
        <section className="jobs-wrapper">

            <div className="title-wrapper">
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
            </div>

            <div className="jobs-search-wrapper">
                <div className="jobs-search-first-box">
                    <div>
                        <input placeholder="მაგ: გაყიდვების მენეჯერი" />
                    </div>
                    <div>
                        <select>
                            <option disabled>აირჩიე ქალაქი</option>
                            <option>თბილისი</option>
                            <option>ქუთაისი</option>
                        </select>
                    </div>
                </div>
                <div className="jobs-search-second-box">
                <div>
                    <select>
                        <option disabled>კატეგორია</option>
                        <option>ბიზნესი</option>
                        <option>უცხო ენები</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option disabled>ანაზღაურება</option>
                        <option>0-1000₾</option>
                        <option>1001-2000₾</option>
                        <option>2001₾+</option>
                    </select>
                </div>
                </div>
                <div className="jobs-search-container">
                    <img src={searchIcon} alt="search" />
                </div>
            </div>

            <div className="jobs-list-wrapper">
                <div className="jobs-list-container">
                    <div className="job-card">
                        <div className="card-title">
                            <img src="https://www.epam.com/etc/designs/epam-core/images/common/logo.png" />
                            <div>
                                <h3>კოკა-კოლა</h3>
                                <p>თბილისი</p>
                            </div>
                        </div>

                        <h6>გაყიდვების მენეჯერი</h6>

                        <div className="card-detail">
                            <div>
                                <img src={clockIcon} alt="clock icon" />
                                <h5>სრული განაკვეთი</h5>
                            </div>

                            <div>
                                <img src={walletIcon} alt="clock icon" />
                                <h5>900-1100₾</h5>
                            </div>
                        </div>

                        <div className="date-wrapper">
                            <p>24 თებ-26 მარ</p>
                            <button>სრულად</button>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="card-title">
                            <img src="https://www.epam.com/etc/designs/epam-core/images/common/logo.png" />
                            <div>
                                <h3>კოკა-კოლა</h3>
                                <p>თბილისი</p>
                            </div>
                        </div>

                        <h6>გაყიდვების მენეჯერი</h6>

                        <div className="card-detail">
                            <div>
                                <img src={clockIcon} alt="clock icon" />
                                <h5>სრული განაკვეთი</h5>
                            </div>

                            <div>
                                <img src={walletIcon} alt="clock icon" />
                                <h5>900-1100₾</h5>
                            </div>
                        </div>

                        <div className="date-wrapper">
                            <p>24 თებ-26 მარ</p>
                            <button>სრულად</button>
                        </div>
                    </div>

                    
                    <div className="job-card">
                        <div className="card-title">
                            <img src="https://www.epam.com/etc/designs/epam-core/images/common/logo.png" />
                            <div>
                                <h3>კოკა-კოლა</h3>
                                <p>თბილისი</p>
                            </div>
                        </div>

                        <h6>გაყიდვების მენეჯერი</h6>

                        <div className="card-detail">
                            <div>
                                <img src={clockIcon} alt="clock icon" />
                                <h5>სრული განაკვეთი</h5>
                            </div>

                            <div>
                                <img src={walletIcon} alt="clock icon" />
                                <h5>900-1100₾</h5>
                            </div>
                        </div>

                        <div className="date-wrapper">
                            <p>24 თებ-26 მარ</p>
                            <button>სრულად</button>
                        </div>
                    </div>
                    

                </div>
            </div>

             
        </section>
    );
};

export default Jobs;
