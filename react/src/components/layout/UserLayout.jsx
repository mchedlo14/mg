import { Outlet, ScrollRestoration } from "react-router-dom";
import UserSidebar from "../user_sidebar";

function UserLayout() {
    return (
        <section className="user_content_container">
            <nav className="user_sidebar_nav">
                <UserSidebar />
            </nav>

            <main>
                <Outlet />
            </main>
        </section>
    );
}

export default UserLayout;
