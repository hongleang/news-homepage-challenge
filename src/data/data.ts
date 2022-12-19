import NewsInFocusDesktopImg from '../assets/images/image-web-3-desktop.jpg';
import NewsInFocusMobileImg from '../assets/images/image-web-3-mobile.jpg';

import FeatureImgOne from '../assets/images/image-retro-pcs.jpg';
import FeatureImgTwo from '../assets/images/image-gaming-growth.jpg';
import FeatureImgThree from '../assets/images/image-top-laptops.jpg';

export type Image = {
    desktop?: string;
    mobile?: string;
}

export type Data = {
    id: number;
    img?: Image;
    title: string;
    contents: string;
    type: 'main-focus' | 'featuring' | 'highlighted';
    featureRank?: number;
}

const newsData: Data[] = [
    {
        id: 1,
        img: {
            desktop: NewsInFocusDesktopImg,
            mobile: NewsInFocusMobileImg
        },
        title: 'The bright future of web 3.0?',
        contents: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. \nBut is it really fulfilling its promise?',
        type: 'main-focus'
    },
    {
        id: 2,
        title: 'Hydrogen VS Electric Cars',
        contents: 'Will hydrogen-fueled cars ever catch up to EVs?',
        type: 'highlighted'
    },
    {
        id: 3,
        title: 'The Downsides of AI Artistry',
        contents: 'What are the possible adverse effects of on-demand AI image generation?',
        type: 'highlighted'
    },
    {
        id: 4,
        title: 'Is VC Funding Drying Up?',
        contents: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        type: 'highlighted'
    },
    {
        id: 5,
        img: {
            desktop: FeatureImgOne,
        },
        title: 'Reviving Retro PCs',
        contents: 'What happens when old PCs are given modern upgrades?',
        type: 'featuring',
        featureRank: 1
    },
    {
        id: 6,
        img: {
            desktop: FeatureImgTwo,
        },
        title: 'Top 10 Laptops of 2022',
        contents: 'Our best picks for various needs and budgets.',
        type: 'featuring',
        featureRank: 2
    },
    {
        id: 7,
        img: {
            desktop: FeatureImgThree,
        },
        title: 'The Growth of Gaming',
        contents: 'How the pandemic has sparked fresh opportunities.',
        type: 'featuring',
        featureRank: 3
    },

];

export default newsData;
