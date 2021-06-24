import React from "react";

import './SimilarAnnouncement.css';

const SimilarAnnouncement = ({title,urlImg}) => {
    return(
      <div className='SimilarAnnouncement'>
          <div
              className='SimilarAnnouncement__img'>
              <img
                  src={urlImg}
                  alt="Similar Announcement"/>
          </div>

          <h3 className='SimilarAnnouncement__title'>{title}</h3>
      </div>
    );
}

export default SimilarAnnouncement;