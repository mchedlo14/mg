import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import searchIcon from "../../assets/svgs/search.svg";
import FooterForHome from "../../components/footer/for_home";
import Homenav from "../../components/homepagenav/Homenav";
import Weather from "../../components/weather/Weather";
function HomePage() {
    const router = useNavigate();

    // const token = localStorage.getItem("authTokens")
    // ? JSON.parse(localStorage.getItem("authTokens"))
    // : null;
    // const user = jwt_decode(token);
    // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    // console.log(user);
    // console.log(isExpired);

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
