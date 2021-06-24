import React from "react";
import {connect} from "react-redux";
import AnnouncementCart from "../AnnouncementCart";

import './AnnouncementsTop.css';

const AnnouncementsTop = ({apple, bitcoin, tesla}) => {
    if (apple.length === 0) {
        return null;
    }

    let announcementSimilar = [apple[1], bitcoin[1], tesla[1]]


    return (
        <section className="AnnouncementSimilar">
            <div className="container">
                <h2 className="AnnouncementSimilar__title">
                    Top 3 similar announcements
                </h2>
                <div className='AnnouncementSimilar__inner'>
                    {
                        announcementSimilar.map(announcement => (
                            <AnnouncementCart
                                key={announcement.publishedAt}
                                url={announcement.url}
                                title={announcement.title}
                                description={announcement.description}
                                img={announcement.urlToImage}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = state => ({
    apple: state.apple,
    bitcoin: state.bitcoin,
    tesla: state.tesla
});
export default connect(mapStateToProps)(AnnouncementsTop);