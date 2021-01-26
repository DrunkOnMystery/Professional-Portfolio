import React from "react";
import '../styles/style.css';
import Header from "./Header";
import BodyContact from "./BodyContact";
import Footer from "./Footer";


function WrapperContact() {
    return(
        <div className="WrapperContact">
            <Header />
            <BodyContact />
            <Footer />
        </div>
    )
}

export default WrapperContact;