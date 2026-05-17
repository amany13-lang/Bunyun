import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ hasDraft }) {
    const links = [
        { icon: "fa-chart-line", title: "status", path: "/" },
        { icon: "fa-users", title: "Users management", path: "/users" },
        { icon: "fa-building", title: "Projects management", path: "/projects" },
        { icon: "fa-building", title: "Developers management", path: "/developers" },
        { icon: "fa-globe", title: "CMS", path: "/cms" },
        { icon: "fa-message", title: "Live Chat", path: "/live-chat" },
    ];

    return (
        <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div className="fw-semibold px-3 fs-4 mb-2">Dashboard</div>
            <nav>
                {links.map((item, index) => (
                    <NavLink 
                        to={item.path} 
                        className={`${styles.navItem} d-flex align-items-center gap-3`} 
                        key={index}
                    >
                        <i className={`fa-solid ${item.icon} fs-5`}></i>
                        <span className="fs-5">{item.title}</span>

                        {item.title === "Users management" && hasDraft && (
                            <span 
                                className="badge rounded-pill bg-danger shadow-sm" 
                                style={{ fontSize: '12px', marginLeft: 'auto' }}
                            >
                                Draft
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;