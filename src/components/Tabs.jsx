import React, { useEffect, useState } from "react";

export default function Tabs(props) {

    const { children } = props;

    const [tabs, setTabs] = useState([]);
    const [content, setContent] = useState({});
    const [active, setActive] = useState("");

    const changeTab = (name) => {
        setActive(name);
    }

    useEffect(() => {
        const tbs = [];
        const cntt = {};

        React.Children.forEach(children, (element) => {
            if (!React.isValidElement(element)) return;
            const { name } = element.props;
            tbs.push(name);
            cntt[name] = element.props.children;
        });

        setTabs(tbs);
        setActive(tbs[0]);
        setContent({ ...cntt });
    }, [props, children])

    return (
        <div>
            <div className='tabs'>
                {tabs.map((tab) => (
                    <button
                        onClick={() => changeTab(tab)}
                        key={tab}
                        className={tab === active ? "active" : ""}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='content'>
                {Object.keys(content).map((key) => {
                    if (key === active){
                        return (
                            <p key={key}>{content[key]}</p>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}
