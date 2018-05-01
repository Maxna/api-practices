import $ from 'jquery';

class Marvel {
  call(character){
 return $.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&limit=1&apikey=${process.env.exports.apiKey}`);
 }
}

export { Marvel }
