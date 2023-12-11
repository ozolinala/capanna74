import React from 'react';
import Layout from '../components/Layout';
import OurStoryGrid from '@/components/OurStoryGrid';
import styles from '../styles/OurStory.module.css';

const OurStory = () => {
  return (
    <Layout currentPage="yourComponent">
<OurStoryGrid></OurStoryGrid>
<div classNamestyle={{ textAlign: 'center', width:'50%' }}>
      <h2 classNamestyle={{ color:'var(--accent-color)'}}>All about family</h2>
      <h3>
        Currently, we’re a family of three. 
        <br></br>Visit our sister restaurants{' '} <br></br>
        <a href="http://mangia.dk/" target="_blank" rel="noopener noreferrer">
          <u>Mangia</u>
        </a>{' '}
        and{' '}
        <a href="https://www.ristorantecircolo.dk/" target="_blank" rel="noopener noreferrer">
          <u>Circolo</u>
        </a>
        .
      </h3>
    </div>
    </Layout>
  );
};

export default OurStory;