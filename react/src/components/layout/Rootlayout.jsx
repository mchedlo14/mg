import {
    Link,
    Outlet,
    ScrollRestoration,
    useLocation,
    useNavigate,
} from "react-router-dom";
import logo from "../../assets/images/logomg.png";
import lightIcon from "../../assets/svgs/brightness.svg";
import fb from "../../assets/svgs/facebook.svg";

function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();
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
                        {location && location.pathname === "/jobs" && (
                            <button onClick={() => navigate("addjobs")}>
                                ვაკანსიის დამატება
                            </button>
                        )}

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
        </>
    );
}

export default RootLayout;
