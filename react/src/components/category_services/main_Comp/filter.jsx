import { useState } from "react";

function CategoryServiceMainFilter() {
    const [companyChecked, setCompanyChecked] = useState({
        all: "",
        popular: "",
        open: "",
        verify: "",
        nearby: "",
        offers: "",
    });
    return (
        <ul className="company_filter_list">
            <li>
                <label htmlFor="_all">ყველა</label>
                <input
                    type="checkbox"
                    name="company_filter"
                    id="_all"
                    value={"all"}
                    onChange={(e) => {
                        setCompanyChecked({
                            ...companyChecked,
                            all: e.target.checked,
                        });
                    }}
                />

                {companyChecked.all && (
                    <div className="_checked">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
                            alt=""
                        />
                    </div>
                )}
            </li>
            <li>
                <label htmlFor="_popular">პოპულარული</label>
                <input
                    type="checkbox"
                    name="company_filter"
                    id="_popular"
                    value={"popular"}
                    onChange={(e) => {
                        setCompanyChecked({
                            ...companyChecked,
                            popular: e.target.checked,
                        });
                    }}
                />
                {companyChecked.popular && (
                    <div className="_checked">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
                            alt=""
                        />
                    </div>
                )}
            </li>
            <li>
                <label htmlFor="_open">ღია</label>
                <input
                    type="checkbox"
                    name="company_filter"
                    id="_open"
                    onChange={(e) => {
                        setCompanyChecked({
                            ...companyChecked,
                            open: e.target.checked,
                        });
                    }}
                />
                {companyChecked.open && (
                    <div className="_checked">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
                            alt=""
                        />
                    </div>
                )}
            </li>
            <li>
                <label htmlFor="_verified">ვერიფიცირებული</label>
                <input
                    type="checkbox"
                    name="company_filter"
                    id="_verified"
                    value={"verify"}
                    onChange={(e) => {
                        setCompanyChecked({
                            ...companyChecked,
                            verify: e.target.checked,
                        });
                    }}
                />
                {companyChecked.verify && (
                    <div className="_checked">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
                            alt=""
                        />
                    </div>
                )}
            </li>
            <li>
                <label htmlFor="_nearby">ახლოს მდებარე</label>
                <input
                    type="checkbox"
                    name="company_filter"
                    id="_nearby"
                    value={"nearby"}
                    onChange={(e) => {
                        setCompanyChecked({
                            ...companyChecked,
                            nearby: e.target.checked,
                        });
                    }}
                />
                {companyChecked.nearby && (
                    <div className="_checked">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
                            alt=""
                        />
                    </div>
                )}
            </li>
            <li>
                <label htmlFor="_offers">შეთავაზებები</label>
                <input
                    type="checkbox"
                    name="company_filter"
                    id="_offers"
                    value={"offers"}
                    onChange={(e) => {
                        setCompanyChecked({
                            ...companyChecked,
                            offers: e.target.checked,
                        });
                    }}
                />
                {companyChecked.offers && (
                    <div className="_checked">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
                            alt=""
                        />
                    </div>
                )}
            </li>
        </ul>
    );
}

export default CategoryServiceMainFilter;
