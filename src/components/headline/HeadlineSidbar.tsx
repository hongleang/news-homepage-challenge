import React, { Fragment } from 'react'
import { Data } from '../../data/data';


export default function HeadlineSidbar({ highlightedNews = [], sidebarstyles }: { highlightedNews: Data[], sidebarstyles?: {} }) {
    const renderNewsComponent = highlightedNews.length > 0 ?
        (highlightedNews.map(({ title, contents }) => (<Fragment key={title}>
            <h5 className='text-white mb-3'>{title}</h5>
            <p className='text-grayish-blue'>{contents}</p>
            <hr style={{ borderColor: 'white', marginTop: 25, borderTop: '1px solid}', opacity: .6 }} />
        </Fragment>))) : (<>No Hightlighted news was found!</>)

    return (
        <div id="news-brief-sidebar" className='col-md-4 mt-4 mt-md-0 bg-very-dark-blue p-4'>
            <h2 className='fs-1 text-soft-orange mb-3'>New</h2>
            {renderNewsComponent}
        </div>
    )
}
