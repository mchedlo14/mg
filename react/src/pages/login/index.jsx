import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authLogin } from "../../api/auth/actions";
import logo from "../../assets/images/logomg.png";

function LoginPage() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    // States
    const [handleErrors, setHandleErrors] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) =>
        dispatch(
            authLogin({
                email: data.email,
                password: data.password,
            })
        )
            .unwrap()
            .then((originalPromiseResult) => {
                setHandleErrors(null);
            })
            .catch((rejectedValue) => {
                setHandleErrors(rejectedValue.message);
            });
    return !isAuthenticated ? (
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="emial"
                        name="login"
                        placeholder="იმეილი"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <input
                        type="password"
                        name="login"
                        placeholder="პაროლი"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    {handleErrors && <span>{handleErrors}</span>}

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
    ) : (
        <Navigate to={"/"} replace={true} />
    );
}

export default LoginPage;
