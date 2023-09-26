//this is the main Home page

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

    // This is useState with useEffect to get data from a REST API
    const [data, setData] = useState({});

    return (
        <>


            <h2>Home Page</h2>
            <Link to="/LoginPage">
                <button>First button</button>
            </Link>
            <Link to="/AccountPage">
                <button>Account Page Button</button>
            </Link>
            <Link to="/SearchResultsPage">
                <button>Search Results Page Button</button>
            </Link>
            
        </>
    )
}

export default HomePage;