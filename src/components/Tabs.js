import { useState } from "react";
import "../styles/Tabs.scss";

const Tabs = ({ children }) => {
    const [active, setActive] = useState(children[0].props.label);
    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActive(newActiveTab);
    };
    return (
        <div className="wrapper">
            <ul className="tabs">
                {children.map((tab) => {
                    const label = tab.props.label;
                    return (
                        <li
                            className={label == active ? "current" : ""}
                            key={label}
                        >
                            <a href="#" onClick={(e) => handleClick(e, label)}>
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {children.map((contentItem, i) => {
                if (contentItem.props.label == active) {
                    return (
                        <div className="content" key={i}>
                            {contentItem.props.children}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Tabs;
