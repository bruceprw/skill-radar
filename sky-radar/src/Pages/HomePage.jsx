import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

    // This is useState with useEffect to get data from a REST API
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
        .then((data) => setData(data))
    }, [])

    return (
        <>
            <h2>{data.fact}</h2>
            <Link to="/secondpage">
                <button className="homepageButton">First button</button>
            </Link>
            
        </>
    )
}

export default HomePage;