import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import CategoryServicesSidebar from "../../components/category_servces/Sidebar";

function CategoryServicesPage() {
    return (
        <>
            <section className="category_services_section">
                <div className="main-wrapper">
                    {/* Section TiTle */}
                    <div className="section_title">
                        <h1>სილამაზე და ჯამთელობა</h1>
                        <Breadcrumbs />
                    </div>

                    {/* Main Content */}
                    <div className="category_services_main_content">
                        <CategoryServicesSidebar />

                        <div className="category_services_data"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoryServicesPage;
