const request = require('request-promise');
const cheerio = require('cheerio');

const websitesToSearch = require('./../config/websites_data');

const getProductData = async (query) => {
    console.log(query)
    let productsArray = [];
    for (index = 0; index < websitesToSearch.length; index++) {
        const productData = await getDataFromEachBrand(index, websitesToSearch[index], query);
        const productsObj = {
            id: index + 1,
            brand: websitesToSearch[index].name,
            products: productData
        }
        productsArray.push(productsObj);
        console.log(productsArray);
    }
    return productsArray;
}

const getDataFromEachBrand = (index, websiteDetails, query) => {
    switch (index) {
        case 0:
            return getDataFromAmazon(websiteDetails, query);
        case 1:
            return getDataFromEbay(websiteDetails, query);
        case 2:
            console.log("Getting Best Buy Data");
            return getDataFromBestBuy(websiteDetails, query);
        default:
            console.log("Default case")
    }
}

var getDataFromAmazon = async (websiteDetails, query) => {
    const result = await request.get(websiteDetails['scrapper_url'] + query);
    const $ = await cheerio.load(result);
    let brandData = [];
    const firstFiveProducts = $('.s-asin').slice(0, 3);
    firstFiveProducts.each((i, el) => {
        const id = $(el).attr('data-asin');
        const name = $(el).find('h2 span').text();
        const price = $(el).find('.a-price-whole').text().replace(',', '');
        const rating = $(el).find('.a-spacing-top-micro span').attr('aria-label');
        const image = $(el).find('.s-image').attr('src');
        const link = websiteDetails['website_link'] + $(el).find('.a-link-normal').attr('href');
        const datas = { id, name, price: '$' + (+price / 75).toFixed(2), rating, image, link, brand: 'Amazon' };
        brandData.push(datas);
    });

    return brandData;
}


var getDataFromEbay = async (websiteDetails, query) => {
    const result = await request.get(websiteDetails['scrapper_url'] + query);
    const $ = await cheerio.load(result);
    let brandData = [];
    const firstFiveProducts = $('.s-item').slice(1, 4);
    firstFiveProducts.each((i, el) => {
        const id = i + 1;
        const name = $(el).find('h3.s-item__title').text();
        const price = $(el).find('.s-item__price').text();
        const image = $(el).find('.s-item__image-img').attr('src');
        const link = $(el).find('.s-item__link').attr('href');
        // const id = link.split('?')[1].split('&')[0].split('=')[1];
        const datas = { id, name, price, image, link, brand: 'EBay' };
        if (name !== '' || price !== '') {
            brandData.push(datas);
        }
    });

    return brandData;
}

var getDataFromBestBuy = async (websiteDetails, query) => {
    console.log("Getting Buest buy data inside method");
    console.log(websiteDetails['scrapper_url'] + query);
    request.get(websiteDetails['scrapper_url'] + query).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
    try {
        const result = await request.get(websiteDetails['scrapper_url'] + query);
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
    scrapper: getProductData
}
