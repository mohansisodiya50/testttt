import React from 'react';
import './Menu.scss';
import welcomeBtn from 'assets/welcome.png';
import keynoteBtn from 'assets/address.png';

function Menu(props) {
    const signOut = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userLocation');
        window.location.href = "/";
    }

    const chatWindow = () => {
        window.open('https://tawk.to/chat/5fca6763a1d54c18d8f07792/default', 'newwindow', 'width=400, height=700')
    }

    return (
        <>
            {props.currentPageType === 'lobby' ? <div className="video-menu">
                <a href="#"><img src={welcomeBtn} /></a>
                <a href="#"><img src={keynoteBtn} /></a>
            </div> : null
            }

            <div className="menu">
                <a className="active" href="/">Home</a><span>|</span>
                <a href="#">Contact us</a><span>|</span>
                <a href="#" onClick={()=>chatWindow()}>Technical support</a><span>|</span>
                <a>Take survey</a><span>|</span>
                <a onClick={() => signOut()}>Sign out</a>
            </div>
        </>
    )
}

export default Menu;
