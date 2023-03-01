import { Data } from '../../data/data'

import './Features';

export default function FeatureCard({ featuringNews = [] }: { featuringNews: Data[] }) {
    if (featuringNews.length === 0) return <>No Features news was found</>

    return (
        <>
            {featuringNews.map(({ title, contents, img, featureRank }) => (
                <div key={title} className="feature-card col row px-0 justify-content-between">
                    <div className="col-3 col-md-12 col-lg-5 col-xl-3 px-0 me-3 mb-3">
                        <img src={img?.desktop ?? ""} alt="title" className='img-fluid' />
                    </div>
                    <div className="col-8 col-md-7">
                        <h2 className='text-grayish-blue mb-4'>{featureRank ? '0' + featureRank : 'Hot'}</h2>
                        <h5 className='feature-card-title fw-bold mb-3'>{title}</h5>
                        <p role="news-content" className='text-dark-grayish-blue'>{contents}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
