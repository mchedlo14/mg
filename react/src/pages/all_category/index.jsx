import { useNavigate } from "react-router";
import bgImage from "../../assets/images/bgIcons.png";

function AllCategoryPage() {
    const navigate = useNavigate();
    return (
        <>
            <section className="all_category_header">
                <div className="filter_container">
                    <div className="filter_upper"></div>
                    <div className="filter"></div>
                </div>

                <div className="all_category_title">
                    <h1>ყველა სერვისი</h1>
                </div>

                <input
                    className="search_container"
                    type="search"
                    placeholder="კატეგორის ძებნა"
                ></input>
            </section>

            {/* Category Container */}
            <section className="all_category_contaner">
                <div
                    className="box"
                    onClick={() => {
                        navigate("rr");
                    }}
                >
                    <div className="image">
                        <img
                            src="https://mg.ge/images/services/48466ser4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="txt">
                        <p>საქორწინო დარბაზები</p>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/services/48466ser4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="txt">
                        <p>საქორწინო დარბაზები</p>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/services/48466ser4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="txt">
                        <p>საქორწინო დარბაზები</p>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/services/48466ser4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="txt">
                        <p>საქორწინო დარბაზები</p>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/services/48466ser4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="txt">
                        <p>საქორწინო დარბაზები</p>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img
                            src="https://mg.ge/images/services/48466ser4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="txt">
                        <p>საქორწინო დარბაზები</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllCategoryPage;
