import { Link } from "react-router-dom";

function InfoBoxLong() {
    return (
        <div
            className="info_box_long"
            onClick={() => {
                navigate("");
            }}
        >
            <div className="image">
                {/* <img
                src="https://mg.ge/images/services/48466ser4.jpg"
                alt=""
            /> */}
            </div>
            <div className="txt">
                <h2>საქორწინო დარბაზები</h2>
                <div className="links">
                    <Link to={""}>სატესტო სიტყვა</Link>
                    <Link to={""}>მოკლე წინადადება</Link>
                    <Link to={""}>სატესტო სიტყვა & წინადადება</Link>
                </div>
            </div>
        </div>
    );
}

export default InfoBoxLong;
