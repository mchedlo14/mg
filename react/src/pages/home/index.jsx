import { useNavigate } from "react-router";

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
        </div>
    );
}

export default HomePage;
