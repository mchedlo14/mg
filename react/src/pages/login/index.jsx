import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authLogin } from "../../api/auth/actions";
import logo from "../../assets/images/logomg.png";
import passwordIcon from "../../assets/images/password.png";

function LoginPage() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    // States
    const [handleErrors, setHandleErrors] = useState(null);
    const [passwordIsShow, setPasswordIsShow] = useState(false);

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
            <form className="login_container">
                {/* სათაური */}
                <h1>ანგარიშზე შესვლა</h1>
                {/* იმეილი */}
                <div>
                    <input type="email" name="log_in" id="email_login" />
                    <label htmlFor="email_login">ელ.ფოსტა</label>
                </div>

                {/* პაროლი */}
                <div>
                    <input
                        type={passwordIsShow ? "text" : "password"}
                        name="log_in"
                        id="password_login"
                    />
                    <label htmlFor="password_login">პაროლი</label>
                    <img
                        src={passwordIcon}
                        alt="password"
                        onClick={() => setPasswordIsShow(!passwordIsShow)}
                    />
                </div>

                {/* დამახსოვება */}
                <aside>
                    <input type="checkbox" id="saving_inp" />
                    <label htmlFor="saving_inp">
                        დაიმახსოვრე ანგარიშის მონაცემები
                    </label>
                </aside>

                <button type="submit">ავტორიზაცია</button>

                <aside>
                    <label htmlFor="">
                        არ გაქვთ ანგარიში? გაიარე{" "}
                        <Link to={"/register"}>რეგისტრაცია</Link>{" "}
                    </label>
                </aside>
            </form>
        </section>
    ) : (
        <Navigate to={"/"} replace={true} />
    );
}

export default LoginPage;
