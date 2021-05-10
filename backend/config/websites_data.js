const websitesToSearch = [
    {
        id: 1,
        name: 'amazon',
        scrapper_url: "https://www.amazon.in/s?k=",
        deal_scrapper_url: "https://www.amazon.in/gp/goldbox",
        website_link: "https://www.amazon.in/",
    },
    {
        id: 2,
        name: 'ebay',
        deal_scrapper_url: "https://www.ebay.com/deals",
        scrapper_url: "https://www.ebay.com/sch/i.html?&_nkw=",
    },
    // {
    //     id: 3,
    //     name: 'walmart',
    //     scrapper_url: "https://www.walmart.com/search/?query=",
    // },
    // {
    //     id: 3,
    //     name: 'bestbuy',
    //     scrapper_url: "https://www.bestbuy.com/site/searchpage.jsp?st=",
    //     website_link: "https://www.bestbuy.com/",
    // }
]

module.exports = websitesToSearch;