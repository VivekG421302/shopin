import React, { useState, useEffect } from 'react';
import '../style/Register.css';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    // STATE MANAGEMENT AREA
    const [loginData, setLoginData] = useState({ loginemail: '', loginpwd: '' });
    const [loginErrors, setLoginErrors] = useState({});
    const [errors, setErrors] = useState({});
    const [create, setCreate] = useState(true);
    const [showLogo, setShowLogo] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    // VALIDATION AREA
    const userSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid Email Format').required('Email is required'),
        phone: Yup.string().matches(/^\d{10}$/, 'Must be 10 digits').required('Phone number is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Must be 8 characters')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain one symbol')
            .matches(/[0-9]/, 'Must contain one number')
            .matches(/[A-Z]/, 'Must contain one uppercase')
            .matches(/[a-z]/, 'Must contain one lowercase'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], 'Passwords must match')
            .required('Confirm password is required'),
    });

    // USE-EFFECT FOR ANIMATION ON MOUNT
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // EVENT HANDLERS FOR SIGNUP
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userSchema.validate(formData, { abortEarly: false });
            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            };

            const response = await fetch('https://shopinjsondb-production.up.railway.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Registration Successful:', result);
                clear();
                navigate('/');
            } else {
                console.error('Registration Failed:', result);
            }
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
        }
    };
    // EVENT HANDLER TO GET DATA FROM INPUT IN SIGNUP
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // EVENT HANDLER TO CLEAR THE FORM
    const clear = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        });
        setLoginData({
            loginemail: '',
            loginpwd: ''
        })
        setErrors({});
        setLoginErrors({});
    };

    // EVENT HANDLER FOR SWITCHING BETWEEN LOGIN AND SIGNUP
    const handlePage = () => {
        setCreate(!create);
    };

    // EVENT HANDLER TO GET DATA FROM INPUT IN LOGIN
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    // EVENT HANDLER FOR SUBMIT ON LOGIN SUBMIT
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { loginemail, loginpwd } = loginData;
        let errors = {};

        try {
            const response = await fetch('https://shopinjsondb-production.up.railway.app/users');
            const users = await response.json();
            const user = users.find(
                (u) => u.email === loginemail || u.phone === loginemail
            );

            if (!user) {
                errors.loginemail = 'Email or phone number not available';
            } else if (user.password !== loginpwd) {
                errors.loginpwd = 'Invalid password';
            }

            setLoginErrors(errors);

            if (Object.keys(errors).length === 0) {
                console.log('Login successful!', user);
                clear();
                navigate('/home');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginErrors({ loginemail: 'Something went wrong. Please try again.' });
        }
    };

    return (
        // LOGO THAT SHOWS UP ON LOADING THE PAGE
        <div className="RegisterBody">
            {showLogo ? (
                <div className="logoContainer">
                    <img src="../images/Shopin Logo.png" alt="Logo" className="logoImage" />
                </div>
            ) : (
                // THE BASIC STRUCTURE FOR THE FORM PAGE WITH SOME COMMON HEADER
                <div className="registerFormDiv">
                    <Link to="/home" className="RegisterPageLogo">
                        <img src="../images/ShopinWhiteLogo.png" alt="Logo" />
                    </Link>
                    {/* TERNARY FOR SWITCHING BETWEEN THE SIGNUP TO REGISTER BASED ON THE STATE */}
                    {create ? (
                        // SIGNUP SECTION
                        <div className="registerFormBody">
                            <div className="RegisterHeadDiv">
                                <h2>Register</h2>
                                <button className="clearFormbtn" type="button" onClick={clear}>X</button>
                            </div>
                            <form className="RegisterBodyDiv" onSubmit={handleSubmit}>
                                <div className="firstnamechild formchild">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        autoComplete='first name'
                                        value={formData.firstName}
                                        placeholder="Enter your First Name..."
                                        onChange={handleChange}
                                    />
                                    <p className="errorstatement">
                                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                                    </p>
                                </div>

                                <div className="lastnamechild formchild">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        autoComplete='last name'
                                        value={formData.lastName}
                                        placeholder="Enter your Last Name..."
                                        onChange={handleChange}
                                    />
                                    <p className="errorstatement">
                                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                                    </p>
                                </div>

                                <div className="emailchild formchild">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete='email'
                                        value={formData.email}
                                        placeholder="Enter your Email..."
                                        onChange={handleChange}
                                    />
                                    <p className="errorstatement">
                                        {errors.email && <div className="error">{errors.email}</div>}
                                    </p>
                                </div>

                                <div className="phonechild formchild">
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        autoComplete='phone'
                                        value={formData.phone}
                                        placeholder="Enter your Phone Number..."
                                        onChange={handleChange}
                                    />
                                    <p className="errorstatement">
                                        {errors.phone && <div className="error">{errors.phone}</div>}
                                    </p>
                                </div>

                                <div className="passwordchild formchild">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        placeholder="Enter your Password..."
                                        onChange={handleChange}
                                    />
                                    <p className="errorstatement">
                                        {errors.password && <div className="error">{errors.password}</div>}
                                    </p>
                                </div>

                                <div className="confirmpwdchild formchild">
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        placeholder="Re-enter your Password..."
                                        onChange={handleChange}
                                    />
                                    <p className="errorstatement">
                                        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                                    </p>
                                </div>
                                <button className="registerFormBtn" type="submit">Create</button>
                            </form>
                        </div>
                    ) : (
                        // LOGIN SECTION
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
                                    <p className="errorstatement">
                                        {loginErrors.loginemail && <div className="error">{loginErrors.loginemail}</div>}
                                    </p>
                                </div>

                                <div className="loginpwd loginformchild">
                                    <label htmlFor="loginpwd">Password:</label>
                                    <input
                                        type="password"
                                        name="loginpwd"
                                        value={loginData.loginpwd}
                                        placeholder="Enter your Password..."
                                        onChange={handleLoginChange}
                                    />
                                    <p className="errorstatement">
                                        {loginErrors.loginpwd && <div className="error">{loginErrors.loginpwd}</div>}
                                    </p>
                                </div>

                                <button className="registerFormBtn loginFormBtn" type="submit">Login</button>
                            </form>
                        </div>
                    )}

                    {/* THIS AREA IS THE CONNECTING LINK BETWEEN SIGNUP & LOGIN */}
                    {create ? (
                        <p className="navToLogin">
                            Already a user? <Link className='navtologinanchor' onClick={handlePage}>Login</Link> now!!
                        </p>
                    ) : (
                        <p className="navToLogin">
                            New to Shopin? <Link className='navtologinanchor' onClick={handlePage}>Create Account</Link> now!!
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Register;
