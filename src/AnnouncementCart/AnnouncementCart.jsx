import React from "react";

import './AnnouncementCart.css';

const AnnouncementCart = ({url,img,title,description}) => {


    return(
        <div className="AnnouncementCart">

                <img
                    className='AnnouncementCart__img'
                    src={img}
                    alt="Announcement Cart"/>

            <a href={url} className="AnnouncementCart__title-link">
            <h3 className="AnnouncementCart__title">
                    {title}
            </h3>
            </a>
            <p className="AnnouncementCart__desription">
                {description}
            </p>
        </div>
    )
}

export default AnnouncementCart;