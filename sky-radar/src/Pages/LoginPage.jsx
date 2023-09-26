import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {

    return (
        <>
        <h2>Login Page</h2>
        <Link to="/">
                <button>Home Page Button</button>
            </Link>
        </>
    )
}
export default LoginPage;