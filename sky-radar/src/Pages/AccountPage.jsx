import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
    return (
        <>
        <h2>Account Page</h2>
        <Link to="/">
                <button>Home Page Button</button>
            </Link>
        </>
    )
}
export default AccountPage;