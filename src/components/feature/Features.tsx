import newsData, { Data } from '../../data/data'
import { useHandleResize } from '../../hooks/useHandleResize';
import FeatureCard from './FeatureCard'

export default function Features() {
    const { mobileSize } = useHandleResize();

    const featuringNews: Data[] = newsData.filter(data => data.type === 'featuring')
        .sort((a, b) => a?.featureRank || 0 - (b?.featureRank || 0));

    if (featuringNews.length === 0) return <>Errors!! No Feature news</>

    return (
        <section role="featuring-news" id="featuring-news" className='container' style={{ marginTop: 70 }}>
            <div className="row row-cols-1 row-cols-md-3 justify-content-center justify-content-md-between" style={
                mobileSize ? {
                    paddingLeft: 20
                } : {}
            }>
                <FeatureCard featuringNews={featuringNews} />
            </div>
        </section>
    )
}
