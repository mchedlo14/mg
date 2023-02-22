import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <header className="root-layout-header">
                <ScrollRestoration />
                <nav className="root-layout-nav"></nav>
            </header>

            <main>
                <Outlet />
                
            </main>
        </>
    );
}

export default RootLayout;
