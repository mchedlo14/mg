import React, { useEffect, useState } from "react";
import downArrow from "../../assets/svgs/arrow-down.svg";
import rightArrow from "../../assets/svgs/right-arrow.svg";
import mark from "../../assets/svgs/danger.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
const JobsForm = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const [showInfo, setShowInfo] = useState({
        general: true,
        about: false,
        contact: false,
    });

    useEffect(() => {
        if (window.innerWidth > 912 && window.innerWidth < 1349) {
            setScreenWidth("-530px");
        } else if (window.innerWidth <= 912) {
            setScreenWidth("-775px");
        } else if (window.innerWidth >= 1349) {
            setScreenWidth("-274px");
        }
    }, []);

    const {register, handleSubmit, watch,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("age_max", data.age_max);
        formData.append("age_min", data.age_min);
        formData.append("desciption_en", data.desciption_en);

        formData.append("desciption_geo", data.desciption_geo);
        formData.append("email", data.email);

        formData.append("desciption_ru", data.desciption_ru);
        formData.append("desciption_en", data.desciption_en);

        formData.append("driving_license", data.driving_license);
        formData.append("experience", data.experience);

        formData.append("gender", data.gender);
        formData.append("last_date", data.last_date);

        formData.append("name_en", data.name_en);
        formData.append("name_geo", data.name_geo);
        formData.append("name_ru", data.name_ru);

        formData.append("phone", data.phone);
        formData.append("position_en", data.position_en);
        formData.append("position_geo", data.position_geo);
        formData.append("position_ru", data.position_ru);

        formData.append("salary_min", data.salary_min);
        formData.append("salary_max", data.salary_max);

        formData.append("working_hours", data.working_hours);
        formData.append("en", "en");
        formData.append("id", "5");

        axios.post("http://127.0.0.1:8000/apps/jobs", formData, {
            headers: {
                method: 'HEAD',
                mode: 'no-cors',
            },
        });

    };

   

    return (
        <section>
            <form
                className="jobs-form-wrapper"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <div
                        className="general-container-parent"
                        onClick={() =>
                            setShowInfo({
                                general: !showInfo.general,
                            })
                        }
                    >
                        {!showInfo.general ? (
                            <img src={rightArrow} />
                        ) : (
                            <img src={downArrow} />
                        )}

                        <h4>?????????????????? ??????????????????????????????</h4>
                    </div>
                    <div className="general-wrapper">
                        {screenWidth != null && (
                            <div
                                className="general-container"
                                style={{
                                    marginTop: showInfo.general
                                        ? "0px"
                                        : screenWidth,
                                }}
                            >
                                <div>
                                    <div className="form-wrapper">
                                        <div>
                                            <label>??????????????????????????? ?????????????????????????????? <img src={mark} /></label>
                                            
                                        </div>
                                        <input
                                            type="text"
                                            {...register("name_geo", {
                                                required: true,
                                            })}
                                        />
                                        {errors.name_geo && <span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <label>
                                            ??????????????????????????? ??????????????????????????????(??????????????????????????????)
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name_en", {
                                                required: false,
                                            })}
                                        />
                                    </div>

                                    <div className="form-wrapper">
                                        <label>
                                            ??????????????????????????? ??????????????????????????????(?????????????????????)
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name_ru", {
                                                required: false,
                                            })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="form-wrapper">
                                        <div>
                                            <label>??????????????????????????? ?????????????????????????????? <img src={mark} /></label>
                                            
                                        </div>
                                        <input
                                            type="text"
                                            {...register("position_geo", {
                                                required: true,
                                            })}
                                        />
                                        {errors.position_geo && <span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <label>
                                            ??????????????????????????? ??????????????????????????????(??????????????????????????????)
                                        </label>
                                        <input
                                            type="text"
                                            {...register("position_en", {
                                                required: false,
                                            })}
                                        />
                                    </div>

                                    <div className="form-wrapper">
                                        <label>
                                            ??????????????????????????? ??????????????????????????????(?????????????????????)
                                        </label>
                                        <input
                                            type="text"
                                            {...register("position_ru", {
                                                required: false,
                                            })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="form-wrapper">
                                        <div>
                                            <label>??????????????????????????? ?????????????????? <img src={mark} /></label>
                                            
                                        </div>
                                        <div className="s">
                                            <input
                                                type="text"
                                                className="range-input"
                                                placeholder="?????????"
                                                {...register("salary_max", {
                                                    required: true,
                                                })}
                                            />
                                            <input
                                                type="text"
                                                className="range-input"
                                                placeholder="?????????"
                                                {...register("salary_min", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                        {errors.salary_min && errors.salary_max && <span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <label>??????????????????????????? ????????????????????????????????????????????? <img src={mark} /></label>
                                        <select
                                            name="cars"
                                            id="cars"
                                            {...register("place", {
                                                required: true,
                                            })}
                                        >
                                            <option value="tbilisi">
                                                ?????????????????????
                                            </option>
                                            <option value="batumi">
                                                ??????????????????
                                            </option>
                                            <option value="gori">????????????</option>
                                            <option value="kutaisi">
                                                ?????????????????????
                                            </option>
                                        </select>
                                        {errors.position_geo && <span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <label>????????????????????? ???????????????????????????</label>
                                        <select name="working hours">
                                            <option value="fukk">???????????????</option>
                                            <option value="ge">????????????????????????</option>
                                            <option value="en">
                                                ???????????????????????? ?????????????????????
                                            </option>
                                            <option value="ge">
                                                ??????????????????????????????
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <div
                        className="general-container-parent"
                        onClick={() =>
                            setShowInfo({
                                about: !showInfo.about,
                            })
                        }
                    >
                        {!showInfo.about ? (
                            <img src={rightArrow} />
                        ) : (
                            <img src={downArrow} />
                        )}

                        <h4>??????????????????????????? ???????????????????????? ??????????????????????????????</h4>
                    </div>
                    <div className="general-wrapper">
                        {screenWidth != null && (
                            <div
                                className="general-container"
                                style={{
                                    marginTop: showInfo.about
                                        ? "0px"
                                        : screenWidth,
                                }}
                            >
                                <div>
                                    <div className="form-wrapper">
                                        <div>
                                            <label>?????? - ??????????????? <img src={mark} /></label>
                                            
                                        </div>
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                        {errors.email && <span className="error-sapn">????????????????????????????????? ????????????</span>}
                                        
                                    </div>

                                    <div className="form-wrapper">
                                        <label>??????????????????????????? ??????????????? <img src={mark} /></label>
                                        <div>
                                            <input
                                                type="text"
                                                className="range-input"
                                                placeholder="?????????"
                                                {...register("age_min", {
                                                    required: true,
                                                })}
                                            />
                                            <input
                                                type="text"
                                                className="range-input"
                                                placeholder="?????????"
                                                {...register("age_max", {
                                                    required: true,
                                                })}
                                            />
                                        </div>

                                        {errors.age_min && errors.age_max &&<span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <div>
                                            <label>
                                                ??????????????????????????? ?????????????????????????????? ????????????
                                                <img src={mark} />
                                            </label>
                                            
                                        </div>
                                        <input
                                            type="date"
                                            {...register("last_date", {
                                                required: true,
                                            })}
                                        />
                                        {errors.last_date &&<span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>
                                </div>

                                <div>
                                    <div className="form-wrapper">
                                        <label>?????????????????????????????? ????????????????????????</label>
                                        <input
                                            type="text"
                                            {...register("phone", {
                                                required: false,
                                            })}
                                        />
                                    </div>

                                    <div className="form-wrapper">
                                        <label>???????????????</label>
                                        <select name="cars" id="cars">
                                            <option value="en">
                                                ???????????????????????????
                                            </option>
                                            <option value="ge">?????????????????????</option>
                                            <option value="ru">??????????????????</option>
                                            <option value="it">????????????????????????</option>
                                        </select>
                                    </div>

                                    <div className="form-wrapper">
                                        <label>???????????????</label>
                                        <select
                                            {...register("gender", {
                                                required: false,
                                            })}
                                        >
                                            <option value="man">
                                                ???????????????????????????
                                            </option>
                                            <option value="women">
                                                ??????????????????????????????
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div className="form-wrapper">
                                        <label>????????????????????? ?????????????????????</label>
                                        <select
                                            {...register("working_hours", {
                                                required: true,
                                            })}
                                        >
                                            <option value="full">
                                                ??????????????? ?????????
                                            </option>
                                            <option value="shifts">
                                                ??????????????????
                                            </option>
                                            <option value="Free schedule">
                                                ?????????????????????????????? ?????????????????????
                                            </option>
                                            <option value="remote">
                                                ????????????????????? ??????????????????
                                            </option>
                                        </select>

                                        {errors.working_hours &&<span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <label>????????????????????? ?????????????????????????????????</label>
                                        <select
                                            name="cars"
                                            {...register("experience", {
                                                required: true,
                                            })}
                                        >
                                            <option defaultValue>
                                                ?????? ??????????????????????????????
                                            </option>
                                            <option value="1">1 ????????????</option>
                                            <option value="2">2 ???????????? </option>
                                            <option value="3">3 ????????????</option>
                                            <option value="3+">3+</option>
                                        </select>
                                        {errors.experience &&<span className="error-sapn">????????????????????????????????? ????????????</span>}
                                    </div>

                                    <div className="form-wrapper">
                                        <label>????????????????????? ?????????????????????</label>
                                        <select
                                            name="cars"
                                            {...register("driving_license", {
                                                required: false,
                                            })}
                                        >
                                            <option value="en">
                                                ?????? ??????????????????????????????
                                            </option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* last form */}

                <div>
                    <div
                        className="general-container-parent"
                        onClick={() =>
                            setShowInfo({
                                contact: !showInfo.contact,
                            })
                        }
                    >
                        {!showInfo.contact ? (
                            <img src={rightArrow} />
                        ) : (
                            <img src={downArrow} />
                        )}

                        <h4>??????????????????????????? ???????????????????????? ??????????????????????????????</h4>
                    </div>
                    <div
                        className="general-wrapper"
                        // style={{ minHeight: showInfo.contact ? "620px" : "0px" }}
                    >
                        <div
                            className="general-container"
                            style={{
                                marginTop: showInfo.contact ? "0" : "-719px",
                            }}
                        >
                             
                                <div className="form-wrapper">
                                    <div>
                                        <label>???????????????????????????????????? ?????????????????? <img src={mark} /></label>
                                    </div>
                                    <div className="text-area-container">
                                        <textarea
                                            {...register("desciption_geo", {
                                                required: true,
                                            })}
                                        />

                                    </div>
                                    {errors.desciption_geo &&<span className="error-sapn">????????????????????????????????? ????????????</span>}
                                </div>

                                <div className="form-wrapper">
                                    <div>
                                        <label>
                                            ???????????????????????????????????? ??????????????????(??????????????????????????????)
                                        </label>
                                        
                                    </div>
                                    <textarea
                                        {...register("desciption_en", {
                                            required: false,
                                        })}
                                    />
                                </div>

                                <div className="form-wrapper">
                                    <div>
                                        <label>
                                            ???????????????????????????????????? ??????????????????(?????????????????????)
                                        </label>
                                        
                                    </div>
                                    <textarea
                                        {...register("desciption_ru", {
                                            required: false,
                                        })}
                                    />
                                </div>

                                <button type="submit">
                                    ??????????????????????????? ????????????????????????
                                </button>
                            </div>
                       
                    </div>
                </div>
            </form>
        </section>
    );
};

export default JobsForm;
