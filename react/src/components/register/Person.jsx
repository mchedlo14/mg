import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function PersonRegistration() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {};
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/* <label htmlFor="name">სახელი</label> */}
                <input
                    type="text"
                    name="person_registration"
                    id="name"
                    placeholder="სახელი"
                    {...register("name", { required: true })}
                    style={{ border: errors.name && "2px solid red" }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="person_registration"
                    id="last_name"
                    placeholder="გვარი"
                    {...register("last_name", { required: true })}
                    style={{ border: errors.last_name && "2px solid red" }}
                />
            </div>
            <div>
                <div className="telephone">
                    <select name="dial_code" id="dial_code">
                        <option value="+995">Geo</option>
                    </select>

                    <input
                        type="number"
                        name="person_registration"
                        id="mobile"
                        placeholder="ტელეფონის ნომერი"
                        {...register("mobile", { required: true })}
                        style={{ border: errors.mobile && "2px solid red" }}
                    />
                </div>
            </div>
            <div>
                <input
                    type="email"
                    name="person_registration"
                    id="mail"
                    placeholder="ელ.ფოსტა"
                    {...register("mail", { required: true })}
                    style={{ border: errors.mail && "2px solid red" }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="person_registration"
                    id="destination"
                    placeholder="შეიყვანე ქალაქი/დაბა/სოფელი"
                    {...register("destination", { required: true })}
                    style={{ border: errors.destination && "2px solid red" }}
                />
            </div>
            <div>
                <select
                    name="person_registration"
                    id="sex"
                    {...register("sex", { required: true })}
                    style={{ border: errors.sex && "2px solid red" }}
                >
                    <option value="">სქესი</option>
                    <option value="მამრობობითი">მამრობობითი</option>
                    <option value="მდედრობითი">მდედრობითი</option>
                </select>
            </div>
            <div>
                <input
                    type="text"
                    name="person_registration"
                    id="date"
                    placeholder="დღე/თვე/წელი"
                    {...register("date", { required: true })}
                    style={{ border: errors.date && "2px solid red" }}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="person_registration"
                    id="password"
                    placeholder="პაროლი"
                    {...register("password", { required: true })}
                    style={{ border: errors.password && "2px solid red" }}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="person_registration"
                    id="re_password"
                    placeholder="გაიმეორეთ პაროლი"
                    {...register("re_password", { required: true })}
                    style={{ border: errors.re_password && "2px solid red" }}
                />
            </div>

            <aside>
                <input
                    type="checkbox"
                    id="terms_check"
                    {...register("terms_checked", { required: true })}
                />
                <label htmlFor="terms_check">
                    ვეთანხმები{" "}
                    <Link to={"/terms_and_conditions"}>
                        წესებსა და პირობებს
                    </Link>
                </label>
            </aside>
            {errors.terms_checked && (
                <span style={{ color: "red" }}>სავალდებულო ველი</span>
            )}

            <aside>
                <input
                    type="checkbox"
                    id="politic_check"
                    {...register("politic_checked", { required: true })}
                />
                <label htmlFor="politic_check">
                    ვეთანხმები <Link to={""}>კონფიდენციალობის პოლიტიკას</Link>
                </label>
            </aside>
            {errors.politic_checked && (
                <span style={{ color: "red" }}>სავალდებულო ველი</span>
            )}

            <button type="submit">რეგისტრაცია</button>
        </form>
    );
}

export default PersonRegistration;
