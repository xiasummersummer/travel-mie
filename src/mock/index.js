const Mock = require('mockjs');
let bannerlist = []
const getBanner = function(){
for(var i = 0; i < 10; i++){
  var item = {
    id: 'img'+i,
    itemimage: Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '我是第' + i + '张图片'),
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
  }
  bannerlist.push(item);
}
console.log(bannerlist)
return bannerlist
}
// let homenewslist = [];
// let homelivelist = [];
// const getHomenewslist = function () {
//   // let item = {
//   //   id: 100,
//   //   type: 1,
//   //   'title|2': '旅游去哪里好'
//   // }
//   // console.log(item)
//   // homenewslist.push(item)
//   // return homenewslist
// }
// const getHomelivelist = function(){
//   for (var i = 0; i < 3; i++) {
//     var item = {
//       id: i,
//       itemSrc: Mock.Random.image('100x100', '#894FC4', '#FFF', 'png', '我是第' + i + '张图片'),
//       alt: Mock.mock('@url()'),
//       href: Mock.mock('@url()'),
//       "num|1000-10000":1
//     }
//     homelivelist.push(item);
//   }
//   console.log(homelivelist)
//   return homelivelist
// }
// Mock.mock('http://www.daxunxun.com/test', 'get', getHomenewslist)
// Mock.mock('http://www.daxunxun.com/live', 'get', getHomelivelist)
Mock.mock('http://www.daxunxun.com/banner','get',getBanner)