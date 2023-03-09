import { RemoveScroll } from "react-remove-scroll";

function PopupMiddle({ children }) {
    return (
        <>
            <div className={"popup_middle"}>
                <RemoveScroll>
                    <div className="pupup_center">{children}</div>
                </RemoveScroll>
            </div>
        </>
    );
}

export default PopupMiddle;
