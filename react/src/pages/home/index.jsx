import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import searchIcon from "../../assets/svgs/search.svg";
import FooterForHome from "../../components/footer/for_home";
import Homenav from "../../components/homepagenav/Homenav";
import Weather from "../../components/weather/Weather";
import { useDispatch } from "react-redux";
import { loadUser } from "../../api/auth/actions";
import linkedin from "../../assets/svgs/linkedin.svg";
import instagram from "../../assets/svgs/insta.svg";
import fb from "../../assets/svgs/fblogo.svg";

import footerLogo from "../../assets/svgs/logomg.png";
function HomePage() {
    const router = useNavigate();

    return (
        <div className="home-conteiner">
            <div>
                <div className="search-container">
                    <input  placeholder="მოიძებნება ყველაფერი..." />
                    <img src={searchIcon} alt="search icon" />
                </div>
                <Weather />
                <Homenav />
            </div>
           
            
        </div>
    );
}

export default HomePage;
