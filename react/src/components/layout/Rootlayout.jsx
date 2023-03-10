import Cookies from "js-cookie";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Link,
    Navigate,
    Outlet,
    ScrollRestoration,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { loadUser, logout } from "../../api/auth/actions";
import logo from "../../assets/images/logomg.png";
import lightIcon from "../../assets/svgs/brightness.svg";
import fb from "../../assets/svgs/fblogo.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import instagram from "../../assets/svgs/insta.svg";

import footerLogo from "../../assets/svgs/logomg.png";

function RootLayout() {
    // States
    const [userIsLoading, setUserIsLoading] = useState(true);

    const navigate = useNavigate();
    // Redux
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);

    // const token = localStorage.getItem("authTokens")
    //     ? JSON.parse(localStorage.getItem("authTokens"))
    //     : null;
    // const token = Cookies.get("authTokens") ? Cookies.get("authTokens") : null;

    useEffect(() => {
        // token &&
        //     dispatch(loadUser())
        //         .unwrap()
        //         .then((originalPromiseResult) => {
        //             setUserIsLoading(false);
        //         })
        //         .catch((rejectedValue) => {
        //             if (rejectedValue.message) {
        //                 setUserIsLoading(false);
        //                 localStorage.removeItem("authTokens");
        //             }
        //         });

        // token === null && setUserIsLoading(false);
        Cookies.get("authTokens") &&
            dispatch(loadUser())
                .unwrap()
                .then((originalPromiseResult) => {
                    setUserIsLoading(false);
                })
                .catch((rejectedValue) => {
                    console.log(rejectedValue);
                    // if (rejectedValue.message) {
                    //     setUserIsLoading(false);
                    //     localStorage.removeItem("authTokens");
                    // }
                });

        !Cookies.get("authTokens") && setUserIsLoading(false);
    }, []);

    const location = useLocation();
    return (
        <>
            {!userIsLoading ? (
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
                                {location && location.pathname === "/jobs" && (
                                    <button onClick={() => navigate("addjobs")}>
                                        ვაკანსიის დამატება
                                    </button>
                                )}

                                {isAuthenticated ? (
                                    <button
                                        className="logout"
                                        onClick={() =>
                                            dispatch(logout())
                                                .unwrap()
                                                .then(
                                                    (
                                                        originalPromiseResult
                                                    ) => {}
                                                )
                                                .catch((rejectedValue) => {})
                                        }
                                    >
                                        გასვლა
                                    </button>
                                ) : (
                                    <button onClick={() => navigate("/log_in")}>
                                        შესვლა
                                    </button>
                                )}

                                <img src={lightIcon} alt="brightness" />
                            </div>
                        </nav>
                    </header>

                    <main>
                        <Outlet />
                    </main>

                    <footer className="root-footer">
                        {/* <div className="copyright box">
                            <p>Copyright © 2023 MG</p>
                        </div>
                        <div className="roules box">
                            <Link to={"/terms_and_conditions"}>
                                წესები და პირობები
                            </Link>
                        </div>
                        <div className="confodential box">
                            <Link to={"/confidential_politics"}>
                                კონფიდენციალობის პოლიტიკა
                            </Link>
                        </div>
                        <div className="back box">
                            <Link to={"/back_politics"}>
                                დაბრუნდების პოლიტიკა
                            </Link>
                        </div>
                        <div className="contact box">
                            <Link to={"/contact"}>კონტაქტი</Link>
                        </div>
                        <div className="social box">
                            <Link to={""}>
                                <img src={fb} alt="" />
                            </Link>
                        </div> */}

                        <div className="upper">
                            <div className="footer-nav-container">
                                <h3>ნავიგაცია</h3>
                                <div>
                                    <p>წესები და პირობები</p>
                                    <p>კონფიდენციალურობის პოლიტიკა</p>
                                    <p>დაბრუნების პოლიტიკა</p>
                                    <p>კონტაქტი</p>
                                </div>
                            </div>

                            {/* Social */}

                            <div className="footer-social-container">
                                <h3>სოც ქსელები</h3>
                                <div
                                    style={{
                                        marginTop: "13px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div>
                                        <div className="footer-container">
                                            <p>facebook.com/NAME</p>
                                            <div className="soc-box">
                                                <img src={fb} alt="fb logo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="footer-container">
                                            <p>linkedin.com/NAME</p>
                                            <div className="soc-box">
                                                <img
                                                    src={linkedin}
                                                    alt="linkedin"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="footer-container">
                                            <p>facebook.com/NAME</p>
                                            <div className="soc-box">
                                                <img
                                                    src={instagram}
                                                    alt="fb logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* copopy */}
                        <div className="footer-copyright-container">
                            <img
                                src={footerLogo}
                                alt="footer logo"
                                className="footer-logo"
                            />
                            <p>Copyright © 2023 MG</p>
                        </div>
                    </footer>
                </>
            ) : (
                <div>Loading</div>
            )}
        </>
    );
}

export default RootLayout;
