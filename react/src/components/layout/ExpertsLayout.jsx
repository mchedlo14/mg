import { Outlet, ScrollRestoration } from "react-router-dom";

function ExpertLayout() {
    return (
        <>
            <header className="experts-layout-header">
                <ScrollRestoration />
                <nav className="experts-layout-nav"></nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default ExpertLayout;
