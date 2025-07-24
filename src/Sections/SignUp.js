import React from 'react'
import { useOutletContext } from 'react-router-dom';

function SignUp() {

    const { formData, errors, handleChange, handleSubmit, clear } = useOutletContext();

    return (
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
    )
}

export default SignUp