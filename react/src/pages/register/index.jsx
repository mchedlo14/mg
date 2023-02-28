import logo from "../../assets/images/logomg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import PersonRegistration from "../../components/register/Person";
import CompanyRegister from "../../components/register/Company";
import experts from "../../assets/images/expert.png";
import info from "../../assets/images/fire.png";
import jobs from "../../assets/images/employee.png";

function RegisterPage() {
    const [registerIsActive, setRegisterIsActive] = useState("person");
    return (
        <section className="register-wrapper">
            <header className="registration-navigation">
                {/* <p>გაქვთ ანგარიში უკვე შექმნილი?</p>
                <Link to={""}>შესვლა</Link> */}
            </header>
            <div className="register-contaner">
                {/* Registration Information */}
                <div className="registration-information">
                    {/* Image */}
                    <div className="image-box">
                        <img src={logo} alt="" />
                    </div>
                    {/* Title */}
                    <div className="registration-title">
                        <h2>MG ID - ერთი ანგარიში ყველა სერვისისთვის</h2>
                    </div>
                    {/* Icons */}
                    <div className="registration-icons">
                        <div>
                            <img src={experts} alt="experts" />
                        </div>

                        <div>
                            <img src={info} alt="info" />
                        </div>
                        <div>
                            <img src={jobs} alt="jobs" />
                        </div>
                    </div>
                    {/* Information */}
                    <div className="registration-information">
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam sunt magnam ducimus laborum
                            similique voluptate nostrum id, ipsam minus,
                            expedita, rerum modi eaque soluta saepe.
                        </p> */}
                    </div>
                </div>

                {/* Registration Form */}
                <div className="registration-form">
                    <h1>ანგარიშის შექმნა</h1>
                    <div className="user-choose-container">
                        <div
                            className={`choose ${
                                registerIsActive === "person" && "active"
                            } `}
                        >
                            <label htmlFor="person">ფიზიკური პირი</label>
                            <input
                                type="radio"
                                name="person_choose"
                                id="person"
                                value={"person"}
                                onChange={(e) => {
                                    setRegisterIsActive(e.target.value);
                                }}
                            />
                        </div>
                        <div
                            className={`choose ${
                                registerIsActive === "company" && "active"
                            } `}
                        >
                            <label htmlFor="company">იურიდიული პირი</label>
                            <input
                                type="radio"
                                name="person_choose"
                                id="company"
                                value={"company"}
                                onChange={(e) => {
                                    setRegisterIsActive(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    {/* Person Form */}
                    {registerIsActive === "person" && <PersonRegistration />}
                    {registerIsActive === "company" && <CompanyRegister />}
                </div>
            </div>
        </section>
    );
}

export default RegisterPage;
