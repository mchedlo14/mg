import { Link } from "react-router-dom";
import fb from "../../assets/svgs/facebook.svg";

function FooterForHome() {
    return (
        <footer className="footer_home">
            <div className="copyright box">
                <p>Copyright © 2023 MG</p>
            </div>
            <div className="roules box">
                <Link to={"/terms_and_conditions"}>წესები და პირობები</Link>
            </div>
            <div className="confodential box">
                <Link to={"/confidential_politics"}>
                    კონფიდენციალობის პოლიტიკა
                </Link>
            </div>
            <div className="back box">
                <Link to={"/back_politics"}>დაბრუნდების პოლიტიკა</Link>
            </div>
            <div className="contact box">
                <Link to={"/contact"}>კონტაქტი</Link>
            </div>
            <div className="social box">
                <Link to={""}>
                    <img src={fb} alt="" />
                </Link>
            </div>

        </footer>
    );
}

export default FooterForHome;
