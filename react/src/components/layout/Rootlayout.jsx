import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logomg.png";
import lightIcon from "../../assets/svgs/brightness.svg";

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
                        <button onClick={() => router("register")}>
                            შესვლა
                        </button>
                        <img src={lightIcon} alt="brightness" />
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            {/* <footer className="root-footer"></footer> */}
        </>
    );
}

export default RootLayout;
