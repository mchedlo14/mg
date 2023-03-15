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
import lightIcon from "../../assets/images/ligh-bulbe.png";
import fb from "../../assets/svgs/facebook.svg";
import authIcon from "../../assets/images/auth_icon.png";
import uploadIcon from "../../assets/images/upload.png";

function RootLayout() {
    // States
    const [userIsLoading, setUserIsLoading] = useState(true);

    const location = useLocation();

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
                                {location && location.pathname === "/jobs" && (
                                    <button onClick={() => navigate("addjobs")}>
                                        ვაკანსიის დამატება
                                    </button>
                                )}

                                {isAuthenticated ? (
                                    <>
                                        {location &&
                                            location.pathname === "/info" && (
                                                <div
                                                    className="add_informations"
                                                    onClick={() => navigate("")}
                                                >
                                                    <img
                                                        src={uploadIcon}
                                                        alt="upload"
                                                    />
                                                    დამატება
                                                </div>
                                            )}

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
                                                    .catch(
                                                        (rejectedValue) => {}
                                                    )
                                            }
                                        >
                                            გასვლა
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() =>
                                                navigate("/register")
                                            }
                                        >
                                            რეგისტრაცია
                                        </button>
                                        <button
                                            onClick={() => navigate("/log_in")}
                                        >
                                            ავტორიზაცია
                                        </button>
                                    </>
                                )}
                                <div className="light_toogle">
                                    <img src={lightIcon} alt="brightness" />
                                </div>

                                <div className="auth">
                                    <img src={authIcon} alt="auth" />
                                </div>
                            </div>
                        </nav>
                    </header>

                    <main>
                        <Outlet />
                    </main>

                    {/* <footer className="root-footer">
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
                    </footer> */}
                </>
            ) : (
                <div>Loading</div>
            )}
        </>
    );
}

export default RootLayout;
