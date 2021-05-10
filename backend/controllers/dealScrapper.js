const request = require('request-promise');
const cheerio = require('cheerio');

const websitesToSearch = require('./../config/websites_data');

const getOffersData = async () => {
    let offersArray = [];
    // for (index = 0; index < websitesToSearch.length; index++) {
    const offersData = await getDataFromEbay(websitesToSearch[1]);
    const offersObj = {
        id: index + 1,
        brand: websitesToSearch[index].name,
        offers: offersData
    }
    offersArray.push(offersObj);
    console.log(offersArray);
    // }
    return offersArray;
}

const getOfferDataFromEachBrand = (index, websiteDetails) => {
    switch (index) {
        // case 0:
        //     return getDataFromAmazon(websiteDetails);
        case 1:
            return getDataFromEbay(websiteDetails);
        case 2:
            console.log("Getting Best Buy Data");
            return getDataFromBestBuy(websiteDetails);
        default:
            console.log("Default case")
    }
}

var getDataFromAmazon = async (websiteDetails) => {
    const result = await request.get(websiteDetails['deal_scrapper_url']);
    const $ = await cheerio.load(result);
    let brandOfferData = [];
    const firstThreeOffers = $('#widgetContent').children;
    // console.log(firstThreeOffers, "In Amazon offers");
    console.log(firstThreeOffers.length);
    return brandOfferData;
}


var getDataFromEbay = async (websiteDetails) => {
    const result = await request.get(websiteDetails['deal_scrapper_url']);
    const $ = await cheerio.load(result);
    const offersData = $('.ebayui-dne-item-featured-card').find('.dne-itemtile').slice(0, 10);
    let brandOfferData = [];
    offersData.each((i, el) => {
        const title = $(el).find('.dne-itemtile-title').attr('title');
        const id = $(el).find('.dne-itemtile').attr('data-listing-id');
        const imageLink = $(el).find('.slashui-image-cntr').find('img').attr('src');
        const reducedPrice = $(el).find('.dne-itemtile-price').find('.first').text();
        const link = $(el).find('.dne-itemtile-detail').find('a').attr('href');
        const originalPrice = $(el).find('.dne-itemtile-original-price').find('.itemtile-price-strikethrough').text();
        const offerValue = $(el).find('.dne-itemtile-original-price').find('.itemtile-price-bold').text();
        const datas = { id, title, imageLink, reducedPrice, offerValue, originalPrice, link };
        brandOfferData.push(datas);
    })
    return brandOfferData;
}

var getDataFromBestBuy = async (websiteDetails) => {
    console.log("Getting Buest buy data inside method");
    console.log(websiteDetails['scrapper_url']);
    request.get(websiteDetails['scrapper_url']).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
    try {
        const result = await request.get(websiteDetails['scrapper_url']);
        console.log(result);
        const $ = await cheerio.load(result);
        let brandData = [];
    } catch (e) {
        console.log(e)
    }

    const firstFiveProducts = $('li.sku-item').slice(0, 5);
    firstFiveProducts.each((i, el) => {
        const id = $(el).attr('.sku-value').text();
        const name = $(el).find('h4.sku-header').find('a').text();
        const price = $(el).find('.priceView-customer-price').find('span').text();
        const image = $(el).find('.product-image').attr('src');
        const link = websiteDetails['website_link'] + $(el).find('h4.sku-header').find('a').attr('href');
        const datas = { id, name, price, image, link };
        if (name !== '' || price !== '') {
            brandData.push(datas);
        }
    });
    return brandData;
}


module.exports = {
    scrapper: getOffersData
}
