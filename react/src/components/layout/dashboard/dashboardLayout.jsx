import { Outlet } from "react-router";
import DashboardSideBar from "../../dashboard_components/sidebar";

function DashboardLayout() {
    return (
        <section className="dahsboard_contant">
            {/* <header className="dashboard_header">

            </header> */}
            <DashboardSideBar />

            <main className="dashboard_main_content">
                <Outlet />
            </main>
        </section>
    );
}

export default DashboardLayout;
