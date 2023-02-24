function CompanyInfoRightSide() {
    return (
        <>
            {/* Quote */}
            <div className="company_get_quote">
                <div className="quote_title">
                    <h3>დაგვიკავშირდით</h3>
                </div>
                <form>
                    <div>
                        <input type="text" placeholder="შეიყვანეთ სახელი" />
                    </div>
                    <div>
                        <input type="text" placeholder="შეიყვანეთ იმეილი" />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="შეიყვანეთ მობ. ნომერი"
                        />
                    </div>
                    <div>
                        <textarea placeholder="შეიყვანეთ ტექსტი"></textarea>
                    </div>

                    <button type="submit">გაგზავნა</button>
                </form>
            </div>

            {/* Company Info */}

            <div className="company_get_quote company_main_information">
                <div className="quote_title">
                    <h3>კომპანიის ინფორმაცია</h3>
                </div>
                <div className="information_container">
                    <p>
                        <span>გამოცდილება</span> <span>20 წელი</span>
                    </p>
                    <hr />
                    <p>
                        <span>გაღების დრო</span> <span>8:00</span>
                    </p>
                    <hr />
                    <p>
                        <span>დაკეტვის დრო</span> <span>9:00</span>
                    </p>
                    <hr />
                    <p>
                        <span>ავტოფარეხი</span> <span>კი</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default CompanyInfoRightSide;
