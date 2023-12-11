import React from 'react';
import Layout from '../components/Layout';
import OurStoryGrid from '@/components/OurStoryGrid';
import styles from '../styles/OurStory.module.css';

const OurStory = () => {
  return (
    <Layout currentPage="yourComponent">
<OurStoryGrid></OurStoryGrid>
    </Layout>
  );
};

export default OurStory;