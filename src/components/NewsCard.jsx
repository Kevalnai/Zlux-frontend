// NewsCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ imageSrc, title, description, link }) => {
    return (
        <div className="news-card">
            <img src={imageSrc} alt={title} className="news-card-image" />
            <div className="news-card-content">
                <h3 className="news-card-title">{title}</h3>
                <p className="news-card-description">{description}</p>
                <a href={link} className="news-card-link">Read more</a>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default NewsCard;
