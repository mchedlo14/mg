import { useState } from "react";
import CategoryServiceMainFilter from "./main_Comp/filter";
import { Link, useNavigate } from "react-router-dom";
import locationSvg from "../../assets/svgs/maps-and-flags.svg";
import phoneSvg from "../../assets/svgs/smartphone.svg";
import mailSvg from "../../assets/svgs/mail.svg";
import starFull from "../../assets/svgs/star.svg";
import starLine from "../../assets/svgs/star_not.svg";

function CategoryServiceMainContent() {
    const navigate = useNavigate();
    return (
        <>
            <CategoryServiceMainFilter />

            <div className="company_long_container">
                {/*  */}
                <div
                    className="company_long_box"
                    onClick={() => {
                        navigate("2");
                    }}
                >
                    <div className="image">
                        <img
                            src="https://mg.ge/images/listings/69656woman-girl-beauty-mask.jpg"
                            alt=""
                        />
                    </div>
                    <div className="information">
                        <div className="title">
                            <h3>
                                Sophia Massage Center In Chicago
                                <img
                                    src="https://mg.ge/images/icon/svg/verified.png"
                                    alt=""
                                />
                            </h3>
                        </div>
                        <div className="address">
                            <img src={locationSvg} alt="" />
                            <p>
                                no:2, 4th avenue, newyork, usa, near to airport
                            </p>
                        </div>
                        <div className="phone">
                            <div>
                                <img src={phoneSvg} alt="" />
                                <p>876587675</p>
                            </div>
                            <div>
                                <img src={mailSvg} alt="" />
                                <p>johnitsmes@gmail.com</p>
                            </div>
                        </div>
                        <div className="social">
                            <a href="tel:123-456-7890">Call Now</a>
                        </div>
                    </div>
                    <div className="review">
                        <div className="box">
                            <h3>5.0</h3>
                            <div>
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starLine} alt="" />
                            </div>
                            <p>1 review</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="company_long_box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/listings/69656woman-girl-beauty-mask.jpg"
                            alt=""
                        />
                    </div>
                    <div className="information">
                        <div className="title">
                            <h3>
                                Sophia Massage Center In Chicago
                                <img
                                    src="https://mg.ge/images/icon/svg/verified.png"
                                    alt=""
                                />
                            </h3>
                        </div>
                        <div className="address">
                            <img src={locationSvg} alt="" />
                            <p>
                                no:2, 4th avenue, newyork, usa, near to airport
                            </p>
                        </div>
                        <div className="phone">
                            <div>
                                <img src={phoneSvg} alt="" />
                                <p>876587675</p>
                            </div>
                            <div>
                                <img src={mailSvg} alt="" />
                                <p>johnitsmes@gmail.com</p>
                            </div>
                        </div>
                        <div className="social">
                            <a href="tel:123-456-7890">Call Now</a>
                        </div>
                    </div>
                    <div className="review">
                        <div className="box">
                            <h3>5.0</h3>
                            <div>
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starLine} alt="" />
                            </div>
                            <p>1 review</p>
                        </div>
                    </div>
                </div>
                <div className="company_long_box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/listings/69656woman-girl-beauty-mask.jpg"
                            alt=""
                        />
                    </div>
                    <div className="information">
                        <div className="title">
                            <h3>
                                Sophia Massage Center In Chicago
                                <img
                                    src="https://mg.ge/images/icon/svg/verified.png"
                                    alt=""
                                />
                            </h3>
                        </div>
                        <div className="address">
                            <img src={locationSvg} alt="" />
                            <p>
                                no:2, 4th avenue, newyork, usa, near to airport
                            </p>
                        </div>
                        <div className="phone">
                            <div>
                                <img src={phoneSvg} alt="" />
                                <p>876587675</p>
                            </div>
                            <div>
                                <img src={mailSvg} alt="" />
                                <p>johnitsmes@gmail.com</p>
                            </div>
                        </div>
                        <div className="social">
                            <a href="tel:123-456-7890">Call Now</a>
                        </div>
                    </div>
                    <div className="review">
                        <div className="box">
                            <h3>5.0</h3>
                            <div>
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starLine} alt="" />
                            </div>
                            <p>1 review</p>
                        </div>
                    </div>
                </div>
                <div className="company_long_box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/listings/69656woman-girl-beauty-mask.jpg"
                            alt=""
                        />
                    </div>
                    <div className="information">
                        <div className="title">
                            <h3>
                                Sophia Massage Center In Chicago
                                <img
                                    src="https://mg.ge/images/icon/svg/verified.png"
                                    alt=""
                                />
                            </h3>
                        </div>
                        <div className="address">
                            <img src={locationSvg} alt="" />
                            <p>
                                no:2, 4th avenue, newyork, usa, near to airport
                            </p>
                        </div>
                        <div className="phone">
                            <div>
                                <img src={phoneSvg} alt="" />
                                <p>876587675</p>
                            </div>
                            <div>
                                <img src={mailSvg} alt="" />
                                <p>johnitsmes@gmail.com</p>
                            </div>
                        </div>
                        <div className="social">
                            <a href="tel:123-456-7890">Call Now</a>
                        </div>
                    </div>
                    <div className="review">
                        <div className="box">
                            <h3>5.0</h3>
                            <div>
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starFull} alt="" />
                                <img src={starLine} alt="" />
                            </div>
                            <p>1 review</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryServiceMainContent;
