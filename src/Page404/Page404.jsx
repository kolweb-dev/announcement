import React from "react";
import './Page404.css';
import {Link} from "react-router-dom";


const Page404 = () => {

    return (
        <section className="page_404">
            <h1 className="page_404-title">404</h1>
            <div className="four_zero_four_bg">
            </div>

            <div className="contant_box_404">
                <h3 className="contant_box_404-title">
                    Look like you're lost
                </h3>

                <p className="contant_box_404-text">
                    the page you are looking for not avaible!
                </p>
                <Link to="/"
                      className="link_404"
                >Go to Home</Link>
            </div>

        </section>
    )
}

export default Page404;