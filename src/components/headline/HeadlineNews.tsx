import React from 'react'
import newsData, { Data } from '../../data/data'
import HeadlineSidbar from './HeadlineSidbar'
import { useHandleResize } from '../../hooks/useHandleResize';

export default function HeadlineNews({ healineNews }: { healineNews: Data }) {
    const highlightedNews: Data[] = newsData.filter(data => data.type === 'highlighted');

    const { mobileSize } = useHandleResize();

    const headlineNewsStyle = {
        padding: 0,
        justifyContent: 'center',
        margin: 0,
        '--bs-gutter-x': '1.5rem'
    };
    const headlineNewsStyleDesktop = {
        justifyContent: 'space-between',
    }


    return (
        <section id="headline-news" className='container mt-4'>
            <div className="row pe-0" style={mobileSize ? headlineNewsStyle : headlineNewsStyleDesktop}>
                <div className='col-md-8 row'>
                    <div className="row pe-0" style={mobileSize ? headlineNewsStyle : headlineNewsStyleDesktop}>
                        <div role="banner" className="col-12 mb-4 px-0">
                            <img src={!mobileSize ? healineNews.img?.desktop || '' : healineNews.img?.mobile} alt="headline-news-img" className="img-fluid" />
                        </div>
                        <div role="article" className="col-lg-6 px-0">
                            <h1 className="headline-news-heading text-very-dark-blue">
                                {healineNews.title}
                            </h1>
                        </div>
                        <div role="article" className="col-lg-6 px-0">
                            <p className='text-dark-grayish-blue' style={{ lineHeight: 1.6, marginBottom: 56 }}>
                                {healineNews.contents}
                            </p>
                            <button className='btn btn-lg btn-readmore text-uppercase'>Read more</button>
                        </div>
                    </div>
                </div>
                <HeadlineSidbar highlightedNews={highlightedNews} sidebarstyles={mobileSize ? headlineNewsStyle : headlineNewsStyleDesktop}/>
            </div>
        </section>
    )
}
