function DashboardPage() {
    return (
        <>
            <section className="dashboard_main_page_introduction">
                <div className="introduction_container">
                    <div className="avatar"></div>
                    <div className="name">
                        <h1>
                            კეთილი იყოს შენი დაბრუნება{" "}
                            <span>Aana Mark (ადმინი)</span>
                        </h1>
                        <p>დაეწიე მოვლენებს. განაახლე სერვისები...</p>
                    </div>
                </div>
            </section>

            <section className="dashboard_main_page_statistic">
                <ul>
                    <li>
                        <img
                            src="https://bizbookdirectorytemplate.com/images/icon/ic-1.png"
                            alt="users"
                        />
                        <span>199</span>
                        <p>ყველა მომხმარებელი</p>
                    </li>
                    <li>
                        <img
                            src="https://bizbookdirectorytemplate.com/images/icon/ic-1.png"
                            alt="users"
                        />
                        <span>199</span>
                        <p>ყველა განცხადება</p>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default DashboardPage;
