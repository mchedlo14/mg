import { Link } from "react-router-dom";
import CompanyInfoLeftSide from "../../components/company_info/leftSide";
import CompanyInfoRightSide from "../../components/company_info/rightSide";

function CompanyInfo() {
    return (
        <>
            <section className="company-info-cover">
                {/* Company Basic Information */}
                <div className="container">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/listings/42413rn53-themes.png"
                            alt=""
                        />
                        <div className="checked">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5972/5972778.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="company-basic-information">
                        {/* Information */}
                        <div className="company-information">
                            <h1>Rn53 Web Deign Services</h1>
                            <p>
                                <span>Address:</span> No:2, 4th Avenue, Newyork,
                                USA, Near to Airport
                            </p>
                            <div className="address-information">
                                <div>
                                    <img
                                        src="https://www.freeiconspng.com/uploads/phone-png-3.png"
                                        alt=""
                                    />
                                    <Link to="tel:123-456-789">
                                        123-456-789
                                    </Link>
                                </div>
                                <div>
                                    <img
                                        src="https://portal.ifba.edu.br/barreiras/imagens-campus-barreiras/icon-email.png/@@images/image.png"
                                        alt=""
                                    />
                                    <Link to="mailto:name@email.com">
                                        name@email.com
                                    </Link>
                                </div>
                                <div>
                                    <img
                                        src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png"
                                        alt=""
                                    />
                                    <Link to="#">site_name.com</Link>
                                </div>
                            </div>
                            {/*  */}
                            <div className="company_contact">
                                <Link className="box" to={""}>
                                    <img
                                        src="https://www.freeiconspng.com/uploads/phone-png-3.png"
                                        alt=""
                                    />
                                    call Now
                                </Link>
                                <Link className="box" to={""}>
                                    <img
                                        src="https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-png-14.png"
                                        alt=""
                                    />
                                    0 Likes
                                </Link>
                                <Link className="box" to={""}>
                                    <img
                                        src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
                                        alt=""
                                    />
                                    WhatsApp
                                </Link>
                                <Link className="box" to={""}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/2111/2111705.png"
                                        alt=""
                                    />
                                    Viber
                                </Link>
                                <Link className="box" to={""}>
                                    <img
                                        src="https://i.pinimg.com/originals/42/77/b8/4277b847781e0336453066dc81266235.png"
                                        alt=""
                                    />
                                    Telegram
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* White Space */}
            <div className="white-pace"></div>
            {/* Company About */}
            <section className="company-info-about">
                {/* Left Side */}
                <div className="left-side">
                    <CompanyInfoLeftSide />
                </div>

                {/* Right Side */}
                <div className="right-side">
                    <CompanyInfoRightSide />
                </div>
            </section>
        </>
    );
}

export default CompanyInfo;
