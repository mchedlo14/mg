import { useNavigate } from "react-router";
import logo from "../../assets/images/logomg.png";
import lightIcon from "../../assets/svgs/brightness.svg";
import searchIcon from "../../assets/svgs/search.svg";
import Weather from "../../components/weather/Weather";
function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="home-wrapper">
            <div className="home-page-logo-container">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>

                <div className="home-button-wrapper">
                    <button
                        onClick={() => {
                            navigate("log_in");
                        }}
                    >
                        შესვლა
                    </button>
                    <img src={lightIcon} alt="brightness" />
                </div>
            </div>

            <div className="search-container">
                <input placeholder="მოიძებნება ყველაფერი" />
                <img src={searchIcon} alt="search icon" />
            </div>
            <Weather />
        </div>
    );
}

export default HomePage;
