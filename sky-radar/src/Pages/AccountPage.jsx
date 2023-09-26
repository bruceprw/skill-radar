import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
    return (
        <div>
        <h2>Account Page</h2>
        <Link to="/">
                <button>Home Page Button</button>
            </Link>
        </div>
    )
}
export default AccountPage;