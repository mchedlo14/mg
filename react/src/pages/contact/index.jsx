import locationIcon from "../../assets/images/location.png";
import TeleIcon from "../../assets/images/tele.png";
import globeIcon from "../../assets/images/globe.png";
import { Link } from "react-router-dom";

function ContactPage() {
    return (
        <section className="contact_page">
            {/* Map */}
            <div className="map_container"></div>

            {/* Contact */}
            <div className="contact_information">
                <header>
                    <h2>დაგვიკავშირდი</h2>
                    <p>
                        ლორემ იპსუმ ვერელებად ვვერაფერი შეეხე, გუნდები
                        დაბრუნდებოდნენ ლამაზისეულს გაიპარა. ნადირო მარლეი
                        ჩამსცხეს
                    </p>
                </header>
                <main>
                    <div className="box">
                        <div className="up">
                            <div>
                                <img src={locationIcon} alt="location" />
                            </div>
                            <p>მისამართი</p>
                        </div>
                        <div className="txt">
                            <h5>
                                საბურთალო, 6 დავით გამრეკელის შესახვევი, თბილისი
                            </h5>
                        </div>
                    </div>

                    <div className="box">
                        <div className="up">
                            <div>
                                <img src={TeleIcon} alt="tele" />
                            </div>
                            <p>საკონტაქტო ინფორმაცია</p>
                        </div>
                        <div className="txt">
                            <h5>
                                ტელ: <span>0322 2 000 000</span>
                            </h5>
                            <h5>
                                ელ.ფოსტა: <span>info@gmail.com</span>
                            </h5>
                        </div>
                    </div>

                    <div className="box">
                        <div className="up">
                            <div>
                                <img src={globeIcon} alt="globe" />
                            </div>
                            <p>სოც ქსელები</p>
                        </div>
                        <div className="txt">
                            <Link to={""}>
                                facebook.com/<span>NAME</span>
                            </Link>
                            <Link to={""}>
                                linkedin.com/<span>NAME</span>
                            </Link>
                            <Link to={""}>
                                instagram.com/<span>NAME</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default ContactPage;
