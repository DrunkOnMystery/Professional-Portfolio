import React from "react";
import '../styles/style.css';
import Header from "./Header";
import BodyPortfolio from "./BodyPortfolio";
import Footer from "./Footer";


function WrapperPortfolio() {
    return(
        <div className="WrapperIndex">
            <Header />
            <BodyPortfolio />
            <Footer />
        </div>
    )
}

export default WrapperPortfolio;