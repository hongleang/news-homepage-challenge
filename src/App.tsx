import { useState, Fragment } from 'react';

import newsData, { Data } from './data/data';
import Navbar from './components/navbar/Navbar';
import HeadlineNews from './components/headline/HeadlineNews';
import Features from './components/feature/Features';


function App() {
  const headlineNews: Data | undefined = newsData.find(data => data.type === 'main-focus');

  if (!headlineNews) {
    console.log('Error: item with type "main-focus" not found for news headline! ');
    return (<>Error!! Please contact support.</>)
  }

  return (
    <>
      <Navbar />
      <HeadlineNews healineNews={headlineNews} />
      <Features />
    </>
  )
}

export default App
