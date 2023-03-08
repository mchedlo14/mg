import { NavLink } from "react-router-dom";
// import DashboaradSidebarCat from "./categories";
// import DashboardSidebarSubCat from "./subCategories";
import { dashboardCategoryApp } from "../localjson/dashboardCategory";
import { Fragment, useEffect, useRef, useState } from "react";

function DashboardSideBar() {
    const [categoryIsOpen, setCategoryIsOpen] = useState({
        isOpen: false,
        id: null,
        height: `-100%`,
    });
    const [subCategoryIsOpen, setSubCategoryIsOpen] = useState({
        isOpen: false,
        id: null,
    });

    return (
        <>
            <nav className="dashboard_sidebar">
                <ul>
                    {/* Listing */}
                    {dashboardCategoryApp &&
                        dashboardCategoryApp.map((data) => (
                            <li
                                key={data.id}
                                className="dashboard_sidebar_category_title"
                            >
                                <div
                                    className="upper"
                                    onClick={() => {
                                        setCategoryIsOpen({
                                            id: data.id,
                                            isOpen: !categoryIsOpen.isOpen,
                                            height: `-${
                                                data.category.length * 40
                                            }px`,
                                        });
                                    }}
                                >
                                    {data.title}
                                    <div
                                        className="rotate"
                                        style={{
                                            transform:
                                                categoryIsOpen.isOpen &&
                                                categoryIsOpen.id === data.id
                                                    ? "rotate(45deg)"
                                                    : "rotate(-45deg)",
                                        }}
                                    />
                                </div>
                                {/*  */}

                                {data &&
                                    data.category &&
                                    data.category.map((info) => (
                                        <aside
                                            key={info.id}
                                            style={{
                                                opacity:
                                                    categoryIsOpen.isOpen &&
                                                    categoryIsOpen.id ===
                                                        data.id
                                                        ? "1"
                                                        : "0",
                                                paddingBottom:
                                                    categoryIsOpen.isOpen &&
                                                    categoryIsOpen.id ===
                                                        data.id
                                                        ? "10px"
                                                        : "0",
                                                paddingTop:
                                                    categoryIsOpen.isOpen &&
                                                    categoryIsOpen.id ===
                                                        data.id
                                                        ? "10px"
                                                        : "0",
                                                marginTop:
                                                    categoryIsOpen.isOpen &&
                                                    categoryIsOpen.id ===
                                                        data.id
                                                        ? "0"
                                                        : categoryIsOpen.height,
                                            }}
                                        >
                                            <main>
                                                <div
                                                    className="category"
                                                    onClick={() =>
                                                        setSubCategoryIsOpen({
                                                            id: info.id,
                                                            isOpen: !subCategoryIsOpen.isOpen,
                                                        })
                                                    }
                                                >
                                                    {info.name}
                                                    <div
                                                        className="rotate"
                                                        style={{
                                                            transform:
                                                                subCategoryIsOpen.isOpen &&
                                                                subCategoryIsOpen.id ===
                                                                    info.id
                                                                    ? "rotate(45deg)"
                                                                    : "rotate(-45deg)",
                                                        }}
                                                    />
                                                </div>

                                                <div
                                                    className="sub_cat"
                                                    style={{
                                                        opacity:
                                                            subCategoryIsOpen.isOpen &&
                                                            subCategoryIsOpen.id ===
                                                                info.id
                                                                ? "1"
                                                                : "0",
                                                        paddingBottom:
                                                            subCategoryIsOpen.isOpen &&
                                                            subCategoryIsOpen.id ===
                                                                info.id
                                                                ? "10px"
                                                                : "0",
                                                        paddingTop:
                                                            subCategoryIsOpen.isOpen &&
                                                            subCategoryIsOpen.id ===
                                                                info.id
                                                                ? "10px"
                                                                : "0",
                                                    }}
                                                >
                                                    {info &&
                                                        info.subCategory &&
                                                        info.subCategory.map(
                                                            (subCat) => (
                                                                <div
                                                                    key={
                                                                        subCat.id
                                                                    }
                                                                    className="sub_sub_category"
                                                                    style={{
                                                                        marginTop:
                                                                            subCategoryIsOpen.isOpen &&
                                                                            subCategoryIsOpen.id ===
                                                                                info.id
                                                                                ? "0"
                                                                                : "-50%",
                                                                    }}
                                                                >
                                                                    <NavLink
                                                                        to={
                                                                            subCat.link
                                                                        }
                                                                    >
                                                                        {
                                                                            subCat.name
                                                                        }
                                                                    </NavLink>

                                                                    <div className="rotate" />
                                                                </div>
                                                            )
                                                        )}
                                                </div>
                                            </main>
                                        </aside>
                                    ))}
                            </li>
                        ))}
                </ul>
            </nav>
        </>
    );
}

export default DashboardSideBar;
