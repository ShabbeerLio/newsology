import React, { Component } from 'react'
import Card from '../../Component/Card/Card';

export default class Home extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "ED initiates probe against Paytm Payments Bank: Report - Hindustan Times",
            "description": "The ED's move is a fresh setback to the Payments Payments Back, especially after the RBI ruled out any review of its clampdown against the entity.",
            "url": "https://www.hindustantimes.com/business/paytm-payments-bank-crisis-enforcement-directorate-ed-investigation-vijay-shekhar-sharma-101707898992022.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/14/1600x900/vijay_shekhar_sharma_1707899287494_1707899287695.jpg",
            "publishedAt": "2024-02-14T08:41:57Z",
            "content": "The Enforcement Directorate on Wednesday initiated preliminary inquiry against Paytm Payments Bank, Reuters quoted a CNBC TV 18 report on Wednesday. The action comes days after the Reserve Bank of In… [+2249 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "SBI stock jumps 5%, pulls Bank Nifty up 200 points into green; Bank of Baroda, PNB rally too - Moneycontrol",
            "description": "Going ahead, analysts believe that the Bank Nifty would continue to oscillate in the range of 45,000-46,000",
            "url": "https://www.moneycontrol.com/news/business/markets/bank-nifty-rebounds-from-days-low-up-1-6-on-rally-in-sbi-axis-bank-icici-bank-12267681.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/market_up_higher-1-770x433.jpg",
            "publishedAt": "2024-02-14T08:22:51Z",
            "content": "The Bank Nifty index rebounded over 900 points from the day's low, trding firmly in green above 45,700 on February 14, ahead of the weekly expiry, led by gains in State Bank of India (SBI), Bank of B… [+1777 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Entrackr"
            },
            "author": "Entrackr",
            "title": "RBI asks Visa, Mastercard to suspend card-based commercial payments - Entrackr",
            "description": null,
            "url": "https://entrackr.com/2024/02/rbi-asks-visa-mastercard-to-suspend-card-based-commercial-payments/",
            "urlToImage": null,
            "publishedAt": "2024-02-14T07:35:11Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Nishant Kumar",
            "title": "HDFC Bank share price hits 52-week low, down 20% in 2024 so far | Mint - Mint",
            "description": "HDFC Bank share price has fallen over 20 per cent in 2024 so far, mainly after December quarter earnings.",
            "url": "https://www.livemint.com/market/stock-market-news/hdfc-bank-share-price-hits-52-week-low-down-20-in-2024-so-far-11707893279915.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/14/1600x900/PTI11-26-2021-000073B-0_1640335770182_1707894038610.jpg",
            "publishedAt": "2024-02-14T07:03:47Z",
            "content": "HDFC Bank share price declined over 2 per cent in intraday trade on Wednesday, February 14, to hit its fresh 52-week low of 1,363.45 on the BSE. HDFC Bank share price opened at 1,380.90 against the p… [+4123 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "Rashi Peripherals share price makes a tepid debut; should you buy, sell or hold the stock? | Mint - Mint",
            "description": "Rashi Peripherals share price makes a lukewarm debut, listed at  ₹339.50 per share on NSE, 9.16% higher than the issue price. Rashi Peripherals IPO GMP suggested a sober listing with a grey market premium of +34.",
            "url": "https://www.livemint.com/market/ipo/rashi-peripherals-share-price-makes-a-tepid-debut-should-you-buy-sell-or-hold-the-stock-11707886537153.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/14/1600x900/banner_desktop_1_1707223566836_1707888145843.png",
            "publishedAt": "2024-02-14T05:24:43Z",
            "content": "Rashi Peripherals share price made a lukewarm debut on the bourses today. On NSE, Rashi Peripherals share price was listed at 339.50 per share, 9.16% higher than the issue price of 311. On BSE, Rashi… [+4491 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Capital Small Finance Bank's weak listing; debuts at 8% discount to IPO issue price - Moneycontrol",
            "description": "The price band for the issue was fixed at Rs 445-468 per share. The IPO, valued at Rs 523.07 crore, garnered a subscription of 4.17 times between February 7 and February 9.",
            "url": "https://www.moneycontrol.com/news/business/ipo/capital-small-finance-banks-weak-listing-debuts-at-8-discount-to-ipo-issue-price-12263481.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/sensex_nifty_market_Nifty_nse_bse-770x433.jpg",
            "publishedAt": "2024-02-14T04:52:00Z",
            "content": "Capital Small Finance Bank made a weak debut on bourses, listing at an 8.1 percent discount to the IPO price on February 14. The stock opened at Rs 430 on the NSE and Rs 435 on the BSE, against the i… [+1648 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Asha Menon",
            "title": "MC Exclusive | API norms may deliver a deathblow to unregulated algos, some illegal PMS-es - Moneycontrol",
            "description": "Insiders reveal what the regulator is targeting and how the norms are taking shape.",
            "url": "https://www.moneycontrol.com/news/business/markets/mc-exclusive-api-norms-how-sebi-plans-to-crack-down-on-unregulated-algo-sellers-illegal-pms-12263651.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/sensex_nifty_sensexdown-1-770x433.jpg",
            "publishedAt": "2024-02-14T04:46:16Z",
            "content": "The market regulator may finally crack down on unregulated algo sellers and illegal portfolio management services (PMS) using the biggest weapon in its arsenal: traceability of trades.\r\nThe regulator… [+4579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "MC Markets Graphixstory: Brokerages cut Paytm's target price by 20-60% after RBI diktat - Moneycontrol",
            "description": "While restrictions on Paytm Payments Bank do not directly impact One97 Communications lending business, brokerages seem to be divided on the matter. Some brokerages see a huge customer exodus impacting loan distribution, while some say the impact will only be…",
            "url": "https://www.moneycontrol.com/news/business/stocks/mc-markets-graphixstory-brokerages-cut-paytms-target-price-by-20-60-after-rbi-diktat-12257301.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/Paytm-3-770x433.jpg",
            "publishedAt": "2024-02-14T04:29:59Z",
            "content": "It has been two weeks since the Reserve Bank of India imposed restrictions on Paytm Payments Bank (PPB). Following the diktat, foreign brokerages like CLSA, Morgan Stanley, Jefferies, Bernstein have … [+2315 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Paarth Khatri",
            "title": "Hero Mavrick 440 launched at ₹1.99 lakh, bookings open - HT Auto",
            "description": "Hero Mavrick 440 shares its engine with the Harley-Davidson X440.",
            "url": "https://auto.hindustantimes.com/auto/two-wheelers/hero-mavrick-440-launched-at-rs-1-99-lakh-bookings-open-41707882375179.html",
            "urlToImage": "https://images.hindustantimes.com/auto/img/2024/02/14/1600x900/Hero_Mavrick_1706014155514_1707882611360.jpeg",
            "publishedAt": "2024-02-14T03:52:39Z",
            "content": "In terms of design, the Mavrick 440 is a roadster with a muscular fuel tank with neo-retro elements. Hero MotoCorp is using metal for the fuel tank, shrouds and even for the fenders. Lighting duties … [+1403 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Exchange4Media"
            },
            "author": "e4m Staff",
            "title": "GroupM India TYNY 2024: Ad revenue estimated to grow at 10% - Exchange4Media",
            "description": "Digital to contribute 57% of ad revenue this year, says the report",
            "url": "https://www.exchange4media.com/advertising-news/groupm-india-tyny-2024-ad-revenue-estimated-to-grow-at-10-132501.html",
            "urlToImage": "https://www.exchange4media.com/news-photo/132501-tybb.jpg",
            "publishedAt": "2024-02-14T03:45:46Z",
            "content": "Last year, Swiggy and Talented supplied the internet with fuzzies during Valentine’s week with an endearing love story of Aashna and Raghav, who met through an order placed to the ‘Wrong Address’.\r\nI… [+2372 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Jana Small Finance Bank IPO Listing LIVE: Muted debut expected - Zee Business",
            "description": "Jana Small Finance Bank IPO Listing Highlights, Jana Small Finance Bank Share Price NSE, BSE:  The",
            "url": "https://www.zeebiz.com/markets/ipo/live-updates-jana-small-finance-bank-ipo-listing-live-updates-jana-sfb-share-price-nse-bse-buy-sell-hold-anil-singhvi-view-276394",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2024/02/14/280527-janasfblistinglive.jpg",
            "publishedAt": "2024-02-14T03:39:58Z",
            "content": "Jana Small Finance Bank IPO Listing Highlights, Jana Small Finance Bank Share Price NSE, BSE: Jana Small Finance Bank made a weak debut on the bourses today i.e. February 14, 2024. The stock listed a… [+216 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Moody's Upgrades Credit Ratings Of 4 Adani Group Companies - NDTV",
            "description": "Credit ratings agency Moody's has revised the outlook of four Adani Group companies to 'stable' from 'negative' in view of timely debt repayments and ability to raise funds.",
            "url": "https://www.ndtv.com/business-news/moodys-upgrades-credit-ratings-of-4-adani-group-companies-5054156",
            "urlToImage": "https://c.ndtvimg.com/2023-02/nt2q8sf4_adani-group-generic-reuters_625x300_03_February_23.jpg",
            "publishedAt": "2024-02-14T03:33:15Z",
            "content": "The ratings for eight other Adani Group companies remain unchanged as 'stable'. (File)\r\nCredit ratings agency Moody's has revised the outlook of four Adani Group companies to 'stable' from 'negative'… [+1570 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Sovereign Gold Bonds 2023-24 Series-IV tranche: Benefits, features of SGB - The Economic Times",
            "description": "Sovereign Gold Bonds (SGBs) are available for sale to resident Indian entities including individuals, HUFs, Trusts, Universities, and Charitable institutions. Denominated in units of one gram of gold. Interest rate notified by RBI. Redemption based on average…",
            "url": "https://economictimes.indiatimes.com/wealth/invest/sovereign-gold-bonds-2023-24-series-iv-tranche-benefits-features-of-sgb/articleshow/107650546.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-107650924,width-1200,height-630,imgsize-1784646,overlay-etwealth/photo.jpg",
            "publishedAt": "2024-02-14T03:30:00Z",
            "content": "The Sovereign Gold Bonds (SGB) 2023-24 Series-IV is now open for people to buy from February 12, 2024, until February 16, 2024. After you buy, it usually takes seven days for the bonds to be given to… [+3497 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DNA India"
            },
            "author": "Ayushmann Chawla",
            "title": "Azim Premji's Wipro announces massive deal, to invest Rs 5480000000 in... - DNA India",
            "description": "Wipro has made it to the headlines as the company has announced a massive deal of Rs 548 crore. Wipro has revealed that it is investing Rs 5480000000 to acquire US-based Aggne Global Inc.",
            "url": "https://www.dnaindia.com/business/report-azim-premji-s-wipro-announces-massive-deal-to-invest-rs-5480000000-in-3077921",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/02/14/2625961-azim-premji.jpg",
            "publishedAt": "2024-02-14T03:29:00Z",
            "content": "Wipro has made it to the headlines as the company has announced a massive deal of Rs 548 crore. Wipro has revealed that it is investing Rs 5480000000 to acquire US-based Aggne Global Inc.Azim Premji’… [+1484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Naina Sood",
            "title": "Market not willing to bet on loss-making startups: Info Edge founder Sanjeev Bikhchandani - Moneycontrol",
            "description": "Bikhchandani said shortage of capital is good for discipline among startups as they become frugal and conscious of unit economics",
            "url": "https://www.moneycontrol.com/news/technology/market-not-willing-to-bet-on-loss-making-startups-info-edge-founder-sanjeev-bikhchandani-12261381.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/img_114401_sanjeev_bikhchandani-653x435.jpeg",
            "publishedAt": "2024-02-14T03:22:56Z",
            "content": "Info Edge founder Sanjeev Bikhchandani has said the market will continue to remain cautious of loss-making startups unless they show a clear visibility on profits.\r\nOver the past three years there ha… [+1589 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": null,
            "title": "Andrej Karpathy is leaving OpenAI again — but he says there was no drama - TechCrunch",
            "description": null,
            "url": "https://techcrunch.com/2024/02/13/andrej-karpathy-is-leaving-openai-again-but-he-says-there-was-no-drama/",
            "urlToImage": null,
            "publishedAt": "2024-02-14T03:15:00Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 242 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Zee leaves brokerages bearish with falling ad revenue, failed merger, likely market share loss - Moneycontrol",
            "description": "Zee's net profit for the quarter ended December 2023 saw a 52 percent drop in profits on a sequential basis",
            "url": "https://www.moneycontrol.com/news/business/earnings/zee-leaves-brokerages-bearish-with-falling-ad-revenue-failed-merger-likely-market-share-loss-12262981.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/09/ZEEL-770x433.jpg",
            "publishedAt": "2024-02-14T03:01:25Z",
            "content": "Brokerages slashed their target price for Zee Entertainment after a sequentially tepid Q3 show dampened investor sentiment for the television broadcaster.\r\nFor the December quarter of FY24, Zee repor… [+3261 chars]"
        },

    ]
    constructor() {
        super();
        console.log("im a constructor");
        this.state = {
            articles: this.articles
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>Newsology Top headlines</h2>
                    <div className="row my-2">
                        {this.state.articles.map((item) => {
                            return (
                                <div className="col-md-4 my-2">
                                    <Card key={item.id} imageUrl={item.urlToImage} title={item.title.slice(0 , 45)} description={item.description} newsUrl={item.url} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
