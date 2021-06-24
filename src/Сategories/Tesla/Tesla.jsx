import React, {useState} from "react";
import {connect} from "react-redux";


import './Tesla.css';
import '../Apple/Apple.css';
import Announcement from "../Announcement";
import NotFoundAnnouncement from "../NotFoundAnnouncement";
import {ADD_TESLA_ANNOUNCEMENT} from "../../AnnouncementStore/actionCreators";

const Tesla = ({tesla,addTeslaAnnouncement}) => {

    const [titleValue,setTitleValue] = useState('');
    const [contentValue,setContentValue] = useState('');
    const [descriptionValue,setDescriptionValue] = useState('');
    const [authorNameValue,setAuthorNameValue] = useState('');
    const [searchItem,setSearchItem] = useState('');

    if (tesla.length > 0){
        tesla = tesla.filter(({title}) => {
            return searchItem === '' || title.toLowerCase().includes(searchItem.toLowerCase())
                ;
        })
    }

    return(
        <div className='Apple container'>
            <h2 className='Apple__title'>Tesla announcements</h2>
            <form className='Apple__form'>
                <div className='Apple__form-add'>
                    <h2 className='Apple-categories-title'>Add announcement</h2>
                    <input
                        className='Apple__form-input'
                        type="text"
                        placeholder='Title announcement'
                        value={titleValue}
                        onChange={(event => setTitleValue(event.target.value))}
                        required/>
                    <input
                        className='Apple__form-input'
                        type="text"
                        placeholder='Content announcement'
                        value={contentValue}
                        onChange={(event => setContentValue(event.target.value))}
                        required/>
                    <input
                        className='Apple__form-input'
                        type="text"
                        placeholder='Description announcement'
                        value={descriptionValue}
                        onChange={(event => setDescriptionValue(event.target.value))}
                        required/>
                    <input
                        className='Apple__form-input'
                        type="text"
                        placeholder='Author announcement'
                        value={authorNameValue}
                        onChange={(event => setAuthorNameValue(event.target.value))}
                        required/>
                    <button className='Apple__form-btn' type="submit" onClick={event => {
                        event.preventDefault()
                        addTeslaAnnouncement([titleValue,contentValue,authorNameValue,descriptionValue]);
                    }}>Add Announcements</button>
                </div>
            </form>
            <div className='Apple-search'>
                <h2 className='Apple-categories-title' >Search announcement</h2>
                <input
                    className='Apple__form-search Apple__form-input'
                    type="text" placeholder='Name announcements'
                    value={searchItem}
                    onChange={(event => setSearchItem(event.target.value))}
                />
            </div>

            <div className="Apple__inner">
                {
                    (tesla.length > 0) ? tesla.map(announcement => (
                        <Announcement
                            key={announcement.content}
                            announcement={announcement}
                            category={'tesla'}
                        />
                    )):<NotFoundAnnouncement/>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    tesla: state.tesla,
});

const mapDispatchToProps = dispatch => ({
    addTeslaAnnouncement: (payload) => dispatch({type: ADD_TESLA_ANNOUNCEMENT,payload:{
            titleValue:payload[0],
            contentValue:payload[1],
            authorNameValue:payload[2],
            descriptionValue:payload[3]
        }})
})

export default connect(mapStateToProps,
    mapDispatchToProps)(Tesla);