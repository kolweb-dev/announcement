import React,{ useState} from "react";
import {connect} from "react-redux";
import {REMOVE_CATEGORY_ANNOUNCEMENT,EDIT_CATEGORY_ANNOUNCEMENT} from "../../AnnouncementStore/actionCreators";

import './Announcement.css'
import DetailsAnnouncement from "../DetailsAnnouncement";



const Announcement = ({announcement = {},removeCategoryAnnouncement,editAppleAnnouncement,category}) => {
    const [announcementTitleValue, setAnnouncementTitleValue] = useState(announcement.title);
    const [editInput,setEditInput] = useState(false);
    const [detailsValue,setDetailsValue] = useState(false);

    const regex = /http[s]?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

    let authorName = announcement.author;

    if (announcement.author.includes('http')){
        let regexWithName = announcement.author.match(regex)
        authorName = regexWithName[1];
    }


    return (
        <>
        <div className='Announcement'>
            <button
                className='Announcement__destoy'
                onClick={e => {
                    e.preventDefault();
                    removeCategoryAnnouncement([category,announcement.content]);
                }}
            />
            <div className='Announcement__edit-buttons'>
                <button
                    className='Announcement__edit'
                    onClick={(e) => {
                        e.preventDefault();
                        setEditInput(true)
                    }}
                    style={{display: editInput ? 'none': 'block'}}
                >
                    <i className="fas fa-pen"></i>
                </button>
                <button
                    className='Announcement__edit'
                    onClick={(e) => {
                        e.preventDefault();
                        setEditInput(false)
                        editAppleAnnouncement([category,announcement.title,announcementTitleValue])
                    }}
                    style={{display: editInput ? 'block' : 'none'}}
                >
                    <i className="fas fa-save"></i>
                    {/*ge*/}
                </button>
                <button
                    className='Announcement__more-info'
                    onClick={(e) => {
                        e.preventDefault();
                        setDetailsValue((prevState => !prevState))
                    }}
                >
                     More details
                    <i className="fas fa-info"></i>
                </button>
            </div>

            <img
                className='Announcement__img'
                src={announcement.urlToImage}
                alt="Announcement Cart"/>
            <div className='Announcement__content'>
                <h3 className='Announcement__content-title'>
                    <span
                        style={{display: editInput ? 'none': 'block'}
                        }>{announcementTitleValue}</span>
                    <input
                        type="text"
                        className='Announcement__edit-input'
                        value={announcementTitleValue}
                        style={{display: editInput ? 'block' : 'none'}}
                        onChange={(event => setAnnouncementTitleValue(event.target.value))}
                    />
                </h3>
                <p className='Announcement__content-text'>
                    {announcement.content}
                </p>
                <p className='Announcement__content-author'>
                    <b>
                        Author:{' '}
                    </b>
                    {authorName}
                </p>
            </div>
        </div>
            {detailsValue&&(<DetailsAnnouncement
                title={announcement.title}
                description={announcement.description}
                date={announcement.publishedAt}
                category={category}
            />)}
        </>
    );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    removeCategoryAnnouncement: (payload) => dispatch({type: REMOVE_CATEGORY_ANNOUNCEMENT,payload:{
            category: payload[0],
            content: payload[1]

        }}),
    editAppleAnnouncement: (payload) => dispatch({type:EDIT_CATEGORY_ANNOUNCEMENT, payload:{
        category: payload[0],
        title: payload[1],
        currentTitle: payload[2],
        }})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Announcement);
