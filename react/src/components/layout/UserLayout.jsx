import { Outlet } from "react-router-dom";
import UserSidebar from "../user_sidebar";
import { useState } from "react";

function UserLayout() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    return (
        <section className="user_content_container">
            <nav className="user_sidebar_nav">
                <UserSidebar sidebarIsOpen={sidebarIsOpen} />
            </nav>

            <button
                className="user_sidebar_burger"
                onClick={() => {
                    setSidebarIsOpen(!sidebarIsOpen);
                }}
                style={{
                    right: sidebarIsOpen ? "270px" : "10px",
                    top: sidebarIsOpen ? "70px" : "150px",
                }}

                // top: 150px;
                // right: 10px;
            ></button>

            <main className="user_main_content">
                <Outlet />
            </main>
        </section>
    );
}

export default UserLayout;
