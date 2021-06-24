import React from "react";
import {connect} from "react-redux";

import './DetailsAnnouncement.css';
import SimilarAnnouncement from "../SimilarAnnouncement";

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

const findSimilarAnnouncements = (announcements, targetAnnouncement) => {
    const targetTitleWords = targetAnnouncement.title.split(' ');
    const targetDescriptionWords = targetAnnouncement.description.split(' ');

    return announcements.filter(({title, description}) => {
        const titleWords = title.split(' ');
        const descriptionWords = description.split(' ');

        if (title === targetAnnouncement.title) {
            return false;
        }

        const isTitleSimilar = targetTitleWords
            .some(word => titleWords.includes(word));
        const isDescriptionSimilar = targetDescriptionWords
            .some(word => descriptionWords.includes(word));

        return isTitleSimilar && isDescriptionSimilar;
    });
};

const DetailsAnnouncement = ({title, description, date, apple, bitcoin, tesla, category}) => {
    let categoryAnnouncement = (category === 'apple') ? apple :
        (category === 'bitcoin') ? bitcoin :
            (category === 'tesla') ? tesla : '';
    let topSimilarAnnouncements = findSimilarAnnouncements(categoryAnnouncement, {title, description});

    let topThreeAnnouncements = topSimilarAnnouncements.slice(0, 3)

    let dateAnnouncement = new Date(date);


    return (
        <div className='DetailsAnnouncement'>
            <div className='DetailsAnnouncement__info'>
                <h3 className='DetailsAnnouncement__title'>{title}</h3>
                <p className='DetailsAnnouncement__text'><b>Desciption: </b>
                    {description}
                </p>
                <p className='DetailsAnnouncement__text'><b>Date Added: </b>
                    {formatDate(dateAnnouncement)}
                </p>
            </div>
            <div className='DetailsAnnouncement__inner'>
                <h2 className='DetailsAnnouncement__inner-title'>Top 3 similar announcements</h2>
                <div className='DetailsAnnouncement__items'>
                    {
                        topThreeAnnouncements.map((el) => (
                            <SimilarAnnouncement
                                key={el.publishedAt}
                                title={el.title}
                                urlImg={el.urlToImage}
                            />
                        ))
                    }
                </div>


            </div>
        </div>)
}

const mapStateToProps = state => ({
    apple: state.apple,
    bitcoin: state.bitcoin,
    tesla: state.tesla,
});

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,
    mapDispatchToProps)(DetailsAnnouncement);
// Загаловок, Опис, Дата додавання