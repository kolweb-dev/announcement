import React from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import AnnouncementCart from "../AnnouncementCart/AnnouncementCart";

import './SliderAnnouncements.css';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomItems(apple, bitcoin, tesla) {

    if (apple.length === 0) {
        return [];
    }
    let newArray = []
    let quantityApple = apple.length;
    let quantityBitcoin = bitcoin.length;
    let quantityTesla = tesla.length;

    for (let i = 0; i < 3; i++) {
        newArray.push(apple[getRandomInt(quantityApple)])
        newArray.push(bitcoin[getRandomInt(quantityBitcoin)])
        newArray.push(tesla[getRandomInt(quantityTesla)])
    }

    return newArray;
}

const SliderAnnouncements = ({apple, bitcoin, tesla}) => {

    const dataForSlider = randomItems(apple, bitcoin, tesla);
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
    };
    return (
        <div className="slider__box container">
            <h2 className='SliderAnnouncements__title'>Other announcements</h2>
            <Slider
                {...settings}
            >
                {
                    dataForSlider.map(user => (
                        <AnnouncementCart
                            key={user.title + 'fd'}
                            url={user.url}
                            title={user.title}
                            description={user.description}
                            img={user.urlToImage}
                        />
                    ))
                }
            </Slider>

        </div>
    );
}


const mapStateToProps = state => ({
    apple: state.apple,
    bitcoin: state.bitcoin,
    tesla: state.tesla
});
export default connect(mapStateToProps)(SliderAnnouncements);
