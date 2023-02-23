import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logomg.png";

function LoginPage() {
    const navigate = useNavigate();
    return (
        <section className="login-wrapper">
            <div className="login-container">
                {/* Back */}
                <div
                    className="back-button"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <div></div>
                </div>
                {/* Image Container */}
                <div className="logn-image-box">
                    <img
                        src={logo}
                        alt=""
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </div>
                {/* Title */}
                <div className="login-title">
                    <p>შესვლა</p>
                </div>
                {/* Form */}
                <form>
                    <input type="emial" name="login" placeholder="იმეილი" />
                    <input type="password" name="login" placeholder="პაროლი" />

                    <Link to={""}>პაროლის აღდგენა</Link>

                    <button type="submit">შესვლა</button>
                </form>

                {/* Create Account */}

                <button
                    className="create-account-button"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    ანგარიშის შექმნა
                </button>

                <div className="signin-socials">
                    <p>ავტორიზაცია სოციალური ქსელებით</p>
                    <div className="social_container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
