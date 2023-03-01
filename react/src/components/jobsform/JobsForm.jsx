import React, { useEffect, useState } from "react";
import downArrow from "../../assets/svgs/arrow-down.svg";
import rightArrow from "../../assets/svgs/right-arrow.svg";
import mark from "../../assets/svgs/danger.svg";

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
    return (
        <section>

        <div className="jobs-form-wrapper">
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

                    <h4>ზოგადი ინფორმაცია</h4>
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
                                        <label>კომპანიის დასახელება</label>
                                        <img src={mark} />
                                    </div>
                                    <input type="text" />
                                </div>

                                <div className="form-wrapper">
                                    <label>
                                        კომპანიის დასახელება(ინგლისურად)
                                    </label>
                                    <input type="text" />
                                </div>

                                <div className="form-wrapper">
                                    <label>კომპანიის დასახელება(რუსულად)</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div>
                                <div className="form-wrapper">
                                    <div>
                                        <label>ვაკანსიის დასახელება</label>
                                        <img src={mark} />
                                    </div>
                                    <input type="text" />
                                </div>

                                <div className="form-wrapper">
                                    <label>
                                        ვაკანსიის დასახელება(ინგლისურად)
                                    </label>
                                    <input type="text" />
                                </div>

                                <div className="form-wrapper">
                                    <label>ვაკანსიის დასახელება(რუსულად)</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div>
                                <div className="form-wrapper">
                                    <div>
                                        <label>ელ - ფოსტა</label>
                                        <img src={mark} />
                                    </div>
                                    <input type="email" />
                                </div>

                                <div className="form-wrapper">
                                    <label>საკონტაქტო ტელეფონი</label>
                                    <input type="text" />
                                </div>

                                <div className="form-wrapper">
                                    <label>კომპანიის დასახელება(რუსულად)</label>
                                    <input type="text" />
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

                    <h4>ვაკანსიის დეტალური ინფორმაცია</h4>
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
                                        <label>სახელფასო ზღვარი</label>
                                        <img src={mark} />
                                    </div>
                                    <div className="s">
                                        <input
                                            type="text"
                                            className="range-input"
                                            placeholder="დან"
                                        />
                                        <input
                                            type="text"
                                            className="range-input"
                                            placeholder="მდე"
                                        />
                                    </div>
                                </div>

                                <div className="form-wrapper">
                                    <label>მაძიებლის ასაკი</label>
                                    <div>
                                        <input
                                            type="text"
                                            className="range-input"
                                            placeholder="დან"
                                        />
                                        <input
                                            type="text"
                                            className="range-input"
                                            placeholder="მდე"
                                        />
                                    </div>
                                </div>

                                <div className="form-wrapper">
                                    <div>
                                        <label>ვაკანსიის მოქმედების ვადა</label>
                                        <img src={mark} />
                                    </div>
                                    <input type="date" />
                                </div>
                            </div>

                            <div>
                                <div className="form-wrapper">
                                    <label>ვაკანსიის ადგილმდებარეობა</label>
                                    <select name="cars" id="cars">
                                        <option value="tbilisi">თბილისი</option>
                                        <option value="batumi">ბათუმი</option>
                                        <option value="gori">გორი</option>
                                        <option value="kutaisi">ქუთაისი</option>
                                    </select>
                                </div>

                                <div className="form-wrapper">
                                    <label>ენები</label>
                                    <select name="cars" id="cars">
                                        <option value="en">ინგლისური</option>
                                        <option value="ge">ქართული</option>
                                        <option value="ru">რუსული</option>
                                        <option value="it">იტალიური</option>
                                    </select>
                                </div>

                                <div className="form-wrapper">
                                    <label>სქესი</label>
                                    <select name="cars" id="cars">
                                        <option value="en">ქაცი</option>
                                        <option value="ge">ქალი</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="form-wrapper">
                                    <label>სამუშაო განაკვეთი</label>
                                    <select name="cars" id="cars">
                                        <option value="en">სრული</option>
                                        <option value="ge">არასრული</option>
                                        <option value="en">
                                            დროებითი სამუშაო
                                        </option>
                                        <option value="ge">სტაჟირეება</option>
                                    </select>
                                </div>

                                <div className="form-wrapper">
                                    <label>სამუშაო გრაფიკი</label>
                                    <select name="cars" id="cars">
                                        <option value="en">სრული დღე</option>
                                        <option value="ge">ცვლები</option>
                                        <option value="en">
                                            თავისუფალი გრაფიკი
                                        </option>
                                        <option value="ge">
                                            სამუშაო სახლში
                                        </option>
                                    </select>
                                </div>

                                <div className="form-wrapper">
                                    <label>სამუშაო გამოცდილება</label>
                                    <select name="cars" id="cars">
                                        <option value="en">
                                            არ მოითხოვება
                                        </option>
                                        <option value="ge">1 წელი</option>
                                        <option value="en">2 წელი </option>
                                        <option value="ge">3 წელი</option>
                                        <option value="ge">3+</option>
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

                    <h4>ვაკანსიის დეტალური ინფორმაცია</h4>
                </div>
                <div
                    className="general-wrapper"
                    // style={{ minHeight: showInfo.contact ? "620px" : "0px" }}
                >
                    <div
                        className="general-container"
                        style={{ marginTop: showInfo.contact ? "0" : "-719px" }}
                    >
                        <div>
                            <div className="form-wrapper">
                                <div>
                                    <label>თანამდებობის აღწერა</label>
                                    <img src={mark} />
                                </div>
                                <textarea />
                            </div>

                            <div className="form-wrapper">
                                <div>
                                    <label>
                                        თანამდებობის აღწერა(ინგლისურად)
                                    </label>
                                    <img src={mark} />
                                </div>
                                <textarea />
                            </div>

                            <div className="form-wrapper">
                                <div>
                                    <label>თანამდებობის აღწერა(რუსულად)</label>
                                    <img src={mark} />
                                </div>
                                <textarea />
                            </div>
                            
                            <button>ვაკანსიის დამატება</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default JobsForm;
