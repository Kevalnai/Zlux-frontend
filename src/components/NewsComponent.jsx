// NewsComponent.jsx
import React from 'react';

import NewsCard from '../components/NewsCard';

import '../Styles/NewsComponent.css'  // Import CSS for layout and styling

const newsData = [
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'Open BIM process in DIALux evo: What we are currently working on for you',
    description: 'An overview of the Open BIM process in DIALux evo and what improvements are coming.',
    link: '#', // Add link if available
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'New calculation parameters for light immission and obtrusive light with DIALux evo 13',
    description: 'Learn about the new calculation parameters in DIALux evo 13 that improve light immission and reduce obtrusive light.',
    link: '#', // Add link if available
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'How are spaces and daylight calculation related?',
    description: 'Discover the relationship between spaces and daylight calculation in lighting design.',
    link: '#', // Add link if available
  },
  {
    id: 4,
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'Platek is a new DIALux Silver Member',
    description: 'We welcome Platek as a new DIALux Silver Member.',
    link: '#', // Add link if available
  },
  {
    id: 5,
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'Goccia Illuminazione is a new DIALux Silver Member',
    description: 'Goccia Illuminazione has joined as a new DIALux Silver Member.',
    link: '#', // Add link if available
  },
  {
    id: 6,
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'Lombardo is a new DIALux Silver Member',
    description: 'We are excited to announce Lombardo as a new DIALux Silver Member.',
    link: '#', // Add link if available
  },
];

const NewsComponent = () => {
  return (
    <>
      <h2>News & Articles</h2>
      <div className="news-container">
      
      {newsData.map((newsItem) => (
        <NewsCard
          key={newsItem.id}
          imageSrc={newsItem.imageSrc}
          title={newsItem.title}
          description={newsItem.description}
          link={newsItem.link}
        />
      ))}
    </div>
    </>
    
  );
};

export default NewsComponent;
