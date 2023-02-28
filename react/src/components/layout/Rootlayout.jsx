import { Link, Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logomg.png";
import lightIcon from "../../assets/svgs/brightness.svg";
import fb from "../../assets/svgs/facebook.svg";

function RootLayout() {
    const navigate = useNavigate();
    return (
        <>
            <header className="root-layout-header">
                <ScrollRestoration />
                <nav className="root-layout-nav">
                    <div
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <img src={logo} alt="logo" className="logo" />
                    </div>

                    <div className="home-button-wrapper">
                        <button onClick={() => navigate("/log_in")}>
                            შესვლა
                        </button>
                        <img src={lightIcon} alt="brightness" />
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="root-footer">
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
        </>
    );
}

export default RootLayout;
