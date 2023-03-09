import Cookies from "js-cookie";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Link,
    Navigate,
    Outlet,
    ScrollRestoration,
    useNavigate,
} from "react-router-dom";
import { loadUser, logout } from "../../api/auth/actions";
import logo from "../../assets/images/logomg.png";
import lightIcon from "../../assets/svgs/brightness.svg";
import fb from "../../assets/svgs/facebook.svg";

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
                        <div className="copyright box">
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
