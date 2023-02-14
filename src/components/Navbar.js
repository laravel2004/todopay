import React, { useEffect, useState } from "react";
import './../css/navbar.css'

const Navbar = (props) => {

    const [scroll, setScroll] = useState(0);
    
    useEffect(() => {
        const handlescroll = () => {
            setScroll(window.pageYOffset)
        }
        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [])

    return(
        <div>
            <nav className={scroll > 50 ? 'onscroll' : 'offscroll'}>
                <div>
                    <h1>TO DO BUY</h1>
                </div>
            </nav>
        </div>
    )
} 

export default Navbar