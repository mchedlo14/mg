function DashboardCategoryForms({ title, children }) {
    return (
        <div className="dashboard_form_category">
            <h1>{title}</h1>
            <hr />
            {children}
        </div>
    );
}

export default DashboardCategoryForms;
