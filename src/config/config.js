import locales from './locales'
import theme from './theme'
const config = {
    "_app_info": {
        "company_name": 'haaaha',
        "website_url": "http://www.thebettersoft.com",
    },
    "_page": {
        max_width: 1280,
        landing_page: `LandingPage`,
    },
    "_routes": [
        {
            path: "/",
            component: "HomePage/HomePage",
            exactly: true,
        },
        {
            path: "/product",
            component: "Product",
            exactly: true,
        },
        {
            path: '/product_detail/:pid',
            exact: true,
            component: "ProductDetail",
        },
        {
            path: '/FAQ',
            exact: true,
            component: "FAQ",
        },
        {
            path: '/intro',
            exact: true,
            component: "CompanyIntro",
        },
        {
            path: '/about',
            exact: true,
            component: "CompanyIntro",
        },
        {
            path: '/contact-us',
            exact: true,
            component: "ContactUs",
        },
    ],
    "_menu": {

    },
    "_theme": {
        current: theme,
    },
    "_locale": {
        locales,
        locales_default: [["zh-CN", "en-US"], "zh-CN"],
    },
    "_api": {
        "current": [["firebase", "fly_native"], "firebase"],
        "firebase": {
            "c": "",
            "r": "",
            "u": "",
            "d": "",
        },
        "fly_native": {
            "root_uri": "localhost:3000/api",
            "c": "",
            "r": "",
            "u": "",
            "d": "",
        },
    },
    "firebase": {
        dev: {
            initConfig: {
                apiKey: 'AIzaSyB31cMH9nJnERC1WCWA7lQHnY08voLs-Z0',
                authDomain: 'react-most-wanted-dev.firebaseapp.com',
                databaseURL: 'https://react-most-wanted-dev.firebaseio.com',
                projectId: 'react-most-wanted-dev',
                storageBucket: 'react-most-wanted-dev.appspot.com',
                messagingSenderId: '70650394824',
                appId: '1:70650394824:web:7cd3113c37741efc',
            },
            messaging: {
                publicVapidKey:
                    'BCSF2KOsR9kL-K141KkVnn_sawQgRt4sKwUENE3sARIxuoGubecyK_BmNempPqspfnXlypfLnAf33IfQd5FKju4',
            },
        }
    },
}

export default config