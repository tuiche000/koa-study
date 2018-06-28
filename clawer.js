const fetchHtml=require('./libs/clawer.js');

fetchHtml('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=31.2444318&longitude=121.4829263&offset=0&limit=8').then(buffer=>{
  // console.log('successed');
  // console.log(buffer.toString().substring(0, 30)+'...'+buffer.toString().substring(buffer.toString().length-30));
  console.log(buffer.toString());
}, err=>{
  console.log('error:', err);
});
