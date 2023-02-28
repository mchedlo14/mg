import { Outlet, ScrollRestoration } from "react-router-dom";

function UserLayout() {
    return (
        <>
            <nav className="user_sidebar_nav"></nav>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default UserLayout;
