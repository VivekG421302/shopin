import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

function Login() {
    const { clear } = useOutletContext();
    const navigate = useNavigate(); // Hook for navigation

    // State for login form data and errors
    const [loginData, setLoginData] = useState({ loginemail: '', loginpwd: '' });
    const [loginErrors, setLoginErrors] = useState({});

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { loginemail, loginpwd } = loginData;
        let errors = {};

        try {
            // Fetch all users from JSON server
            const response = await fetch('https://shopinjsondb-production.up.railway.app/users');
            const users = await response.json();

            // Check if user exists with the provided email/phone
            const user = users.find(
                (u) => u.email === loginemail || u.phone === loginemail
            );

            if (!user) {
                errors.loginemail = 'Email or phone number not available';
            } else if (user.password !== loginpwd) {
                errors.loginpwd = 'Invalid password';
            }

            setLoginErrors(errors);

            // If no errors, proceed to login
            if (Object.keys(errors).length === 0) {
                console.log('Login successful!', user);
                clear();
                navigate('/'); // Redirect to home page on success
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginErrors({ loginemail: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <div className="loginFormBody">
            <div className="RegisterHeadDiv">
                <h2>Login</h2>
                <button className="clearFormbtn" type="button" onClick={clear}>
                    X
                </button>
            </div>

            <form className="loginBodyDiv" onSubmit={handleLoginSubmit}>
                <div className="loginemail loginformchild">
                    <label htmlFor="loginemail">Email or Phone</label>
                    <input
                        type="text"
                        name="loginemail"
                        autoComplete='email'
                        value={loginData.loginemail}
                        placeholder="Enter Email or Phone Number..."
                        onChange={handleLoginChange}
                    />
                    {loginErrors.loginemail && (
                        <p className="loginerrorstatement">{loginErrors.loginemail}</p>
                    )}
                </div>

                <div className="loginpassword loginformchild">
                    <label htmlFor="loginpwd">Password:</label>
                    <input
                        type="password"
                        name="loginpwd"
                        value={loginData.loginpwd}
                        placeholder="Enter your Password..."
                        onChange={handleLoginChange}
                    />
                    {loginErrors.loginpwd && (
                        <p className="loginerrorstatement">{loginErrors.loginpwd}</p>
                    )}
                </div>

                <button className="registerFormBtn loginformbtn" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
