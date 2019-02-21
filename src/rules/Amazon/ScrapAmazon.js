import {TYPE_AMAZON} from '../index'


const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i;
const isAmazonUrl = url => REGEX_AMAZON_URL.test(url);
export const ScrapAmazon = $ => ({
  title: $('title').text(),
  content: $("meta[name='description']").attr('content'),
  url: $("meta[property='og:url']").attr('content'),
  image: [
    $('.a-dynamic-image').attr('data-old-hires'),
    $('.a-dynamic-image').attr('src'),
  ],
  description: $("meta[name='description']").attr('content'),
  video: [],
  type: TYPE_AMAZON, // MIME Type
  publisher: ['Amazon'],
});
