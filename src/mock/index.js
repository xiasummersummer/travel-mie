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

let stratesearchlist = [];
const getstrasearchlist = function () {
  for(var i = 0; i<8;i++){
    var item={
      id:i,
      search:["我是搜索历史"+ i]
    }
    stratesearchlist.push(item)
  }
  stratesearchlist.length = 8;
  return stratesearchlist
}
let foodlist = []
const getFoodlist = function(){
for(var i = 0; i < 10; i++){
  var item = {
    id: 'img'+i,
    itemimage: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + i + '张图片'),
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'老白家'+`${i}`+'腊汁肉夹馍',
    countnum:'10分',
    decribe:'山西特色'+`${i}`+'陕西西胜多负少都是对的所是多少安',
    add:'体育场'+i,
    salenum:'月销99'+i+'+'
  }
  foodlist.push(item);
}
console.log(foodlist)
return foodlist
}
// console.log(stratesearchlist)
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
Mock.mock('http://www.daxunxun.com/stratesearch', 'get', getstrasearchlist)
Mock.mock('http://www.daxunxun.com/foodlist', 'get', getFoodlist)
// Mock.mock('http://www.daxunxun.com/live', 'get', getHomelivelist)
Mock.mock('http://www.daxunxun.com/banner','get',getBanner)
Mock.mock('http://www.daxunxun.com/foodlist', 'get', getFoodlist)