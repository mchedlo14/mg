import React, { useEffect, useState } from "react";
import pinIcon from "../../assets/svgs/pin.svg";
import chainIcon from "../../assets/svgs/link-chain.svg";
import { useLocation } from "react-router";
const JobDetail = () => {
    const location = useLocation();

    return (
        <section className="jobs-detail-wrapper">
            <div className="detail-container">
                <div className="company-container">
                    <div className="job-detail-title-container">
                        <img
                            src="https://htmldemo.net/finate/finate/assets/img/companies/10.webp"
                            className="company-logo"
                        />
                        <div>
                            <h4>გაყიდვების მენეჯერი</h4>
                            <p>კოკა-კოლა</p>
                            <div className="detail-location-wrapper">
                                <img src={pinIcon} alt="pin icon" />
                                <p>წერეთელი</p>
                            </div>
                        </div>
                    </div>

                    <div className="detail-price-container">
                        <p>
                            ₾5000<span>/თვეში</span>
                        </p>
                        <div
                            className="link-container"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    `http://localhost:3000${location.pathname}`
                                )
                            }
                        >
                            <img src={chainIcon} alt="chain icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="job-description-container">
              <div>
              <div className="description">
                    <h4>აღწერა</h4>
                    <p>
                        It is a long established fact that a reader will be
                        distracted the readable content of page when looking
                        atits layout. The point of using is that has
                        more-or-less normal a distribution of letters, as
                        opposed to usin content publishing packages web page
                        editors. It is a long established fact that a reader
                        will be distracts by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that has look like readable publishing packages and web
                        page editors. It is a long established fact that a
                        reader will be distracted the readable content of a page
                        when looking atits layout. The point of using is that
                        has more-or-less normal a distribution of letters, as
                        opposed to usin content publishing packages web page
                        editors.
                    </p>
                </div>

                <div className="description">
                    <h4>მოთხოვნები</h4>
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Django</li>
                </div>
              </div>

            </div>


        </section>
    );
};

export default JobDetail;
