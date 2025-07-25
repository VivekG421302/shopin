import React from 'react'
import "../style/AdminNav.css"

function AdminNav({ theme, toggleTheme }) {
    return (
        <>
            <div className="adminNavBody">
                <div className="adminNavInputArea">
                    <div className="adminSearchBarDiv">
                        <input type="text" className="adminsearch" placeholder='Search on Shopin. . . ' />
                    </div>
                    <div className="adminsearchbtn">
                        <img src="../images/search.png" alt="" className="magpic" />
                    </div>
                </div>
                <div className="adminnavs">
                    <div className="adminNotificationDiv">
                        <img src="../images/bell.svg" alt="notification" className="adminbell adminico" />
                    </div>
                    <div className="adminModeDiv" onClick={toggleTheme}>
                        <img src="../images/dark.svg" alt="mode" className="adminmode adminico" />
                    </div>
                    <div className="adminAccountDiv">
                        <img src="../images/Profile.svg" alt="profile" className="adminprofile adminico" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminNav