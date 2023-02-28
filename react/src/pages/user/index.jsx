import { Link } from "react-router-dom";

function UserPage() {
    return (
        <>
            <section className="user_dashboard_section">
                {/* Introduction */}
                <div className="introduction">
                    <div className="avatar">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                            alt=""
                        />
                    </div>
                    <div className="text">
                        <h2>
                            კეთილი იყოს თქვენი დაბრუნება, <span>გიორგი</span>
                        </h2>
                    </div>
                </div>

                {/* Categories */}
                <div className="user_dashboard_category_container">
                    <Link to={""} className="box">
                        <div className="quantity">
                            <h2>18</h2>
                        </div>
                        <div className="info">
                            <p>ყველა კატეგორია</p>
                            <span>ტოტალური რაღაც</span>
                        </div>
                    </Link>

                    <Link to={""} className="box">
                        <div className="quantity">
                            <h2>18</h2>
                        </div>
                        <div className="info">
                            <p>ყველა კატეგორია</p>
                            <span>ტოტალური რაღაც</span>
                        </div>
                    </Link>

                    <Link to={""} className="box">
                        <div className="quantity">
                            <h2>18</h2>
                        </div>
                        <div className="info">
                            <p>ყველა კატეგორია</p>
                            <span>ტოტალური რაღაც</span>
                        </div>
                    </Link>
                </div>
                {/*  */}
            </section>
        </>
    );
}

export default UserPage;
