import { useState, Fragment, useEffect } from 'react';

import newsData, { Data } from './data/data';
import Navbar from './components/navbar/Navbar';
import HeadlineNews from './components/headline/HeadlineNews';
import Features from './components/feature/Features';


function App() {
  const headlineNews: Data | undefined = newsData.find(data => data.type === 'main-focus');

  if (!headlineNews) {
    return (<>Error!! Please contact support.</>)
  }

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.getElementById("root")!.className = theme;

  }, [theme])


  return (
    <>
      <Navbar />
      <HeadlineNews healineNews={headlineNews} />
      <Features />
    </>
  )
}

export default App
