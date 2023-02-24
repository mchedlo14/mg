import { Outlet, ScrollRestoration } from "react-router-dom";

function EmptyLayout() {
    return (
        <>
            <header className="empty-layout-header">
                <ScrollRestoration />
                <nav className="empty-layout-nav"></nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default EmptyLayout;
