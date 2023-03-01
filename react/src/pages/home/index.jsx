import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import searchIcon from "../../assets/svgs/search.svg";
import FooterForHome from "../../components/footer/for_home";
import Homenav from "../../components/homepagenav/Homenav";
import Weather from "../../components/weather/Weather";
function HomePage() {
    const router = useNavigate();

    return (
        <div className="home-wrapper">
            <div>
                <div className="search-container">
                    <input placeholder="მოიძებნება ყველაფერი" />
                    <img src={searchIcon} alt="search icon" />
                </div>
                <Weather />
                <Homenav />
            </div>
            {/* <footer className="root-footer">
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
            </footer> */}
            {/* <FooterForHome /> */}
        </div>
    );
}

export default HomePage;
