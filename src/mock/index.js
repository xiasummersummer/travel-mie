const Mock = require('mockjs');
const getBanner = function(){
  let bannerlist = []
for(var i = 0; i < 10; i++){
  var item = {
    id: 'img'+i,
    itemimage: Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '我是第' + i + '张图片'),
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
  }
  bannerlist.push(item);
}
// console.log(bannerlist)
return bannerlist
}
// 直播数据
const getLiveimglist = function(){
  let liveimg = []
for(var i = 0; i < 3; i++){
  var item = {
    id: 'img'+i,
    itemimage: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + i + '张图片'),
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'大雁塔'+i
  }
  liveimg.push(item);
}
// console.log(bannerlist)
return liveimg
}


const getstrasearchlist = function () {
  let stratesearchlist = [];
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
for(let i = 0; i < 10; i++){
 let foodbannerlist = [];
  for (let i=0;i<3;i++ ){
  foodbannerlist.push([Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + i + '张图片')])
}

  var item = {
    id: 'img'+i,
    itemimage: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + i + '张图片'),
    foodbannerlist,
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'老白家'+i+'腊汁肉夹馍',
    star: 9,
    countnum:'10分',
    decribe:'山西特色'+i+'陕西西胜多负少都是对的所是多少安',
    add:'体育场'+i,
    salenum:'月销99'+i+'+',
    recomend: []
  }
  foodlist.push(item);
}
// console.log(foodlist)
foodlist.length = 10;
return foodlist
}

// 景点列表
let sensehotlist = [];
const getSensehotlist = function () {
  for(var i = 0; i<3;i++){
    var item={
      is:'hotimg'+i,
      hotname: i+'大雁塔',
      hotimg:Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '景点' + i + '张图片')
    }
    sensehotlist.push(item)
  }
  sensehotlist.length = 3;
  return sensehotlist
}


let senselist = []
const getSenselist = function(){
for(let i = 0; i < 10; i++){
  let item = {
    id: 'img'+i,
    itemimage: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '景点' + i + '张图片'),
    price:'12'+i,
    sensehotlist,
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'西安'+i+'西安旅游 西安兵马俑博物馆门票 兵马俑门票兵马俑大门票秦始皇陵',
    star: parseFloat(4+Math.random(i/10)),
    countnum:'10分',
    decribe:'山西特色'+i+'陕西西胜多负少都是对的所是多少安',
    assess:'很好',
    add:'体育场'+i,
    salenum:'月销99'+i+'+',
    recomend: [],
    time: '早10:'+i+'点前可订票'
  }
  senselist.push(item);
}
// console.log(senselist)
senselist.length = 10;
return senselist
}

const scenicData = [
  {
    id: 1,
    itemimage: "https://dimg04.c-ctrip.com/images/300e0q000000g7qjl6A46_C_280_280_Q90.jpg",
    "price|1-100": 100,
    sensehotlist,
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'三亚5日自由行(5钻)·暑“价”狂欢『冲6W人爆单·年度超人气款』【高星度假酒店4晚连住·酒店随心挑】暑期清凉风暴 亲子游火爆开售！',
    star: parseFloat(4+Math.random(10)),
    countnum:'10分',
    decribe:'山西特色陕西西胜多负少都是对的所是多少安',
    assess:'很好',
    add:'体育场',
    salenum:'月销99',
    recomend: [],
    time: '早10:00点前可订票'
  },
  {
    id: 2,
    itemimage: "https://webresource.c-ctrip.com/resaresonline/risk/ubtrms/md.min.b9c726d2.js",
    "price|1-100": 100,
    sensehotlist,
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'普吉岛6日5晚自由行·『2W+出游·明星款·毕业季！』暑期酒店特卖·亲子礼盒多样选·连住不挪窝！落地签免费说走就走！观海玩海浪在普吉！沙滩躺椅芒果冰沙享惬意',
    star: parseFloat(4+Math.random(10)),
    countnum:'10分',
    decribe:'山西特色陕西西胜多负少都是对的所是多少安',
    assess:'很好',
    add:'体育场',
    salenum:'月销99',
    recomend: [],
    time: '早10:00点前可订票'
  },
  {
    id: 3,
    itemimage: "https://dimg05.c-ctrip.com/images/100i0j000000a9b7i4B80_C_280_280_Q90.jpg",
    "price|1-100": 100,
    sensehotlist,
    alt: Mock.mock('@url()'),
    href: Mock.mock('@url()'),
    name:'巴厘岛7日5晚自由行(5钻)·【安排！向导包车|鸟巢秋千|泳池别墅|漂浮早餐+5星度假村】【赠】网红情侣漂浮早餐【赠】接送机 包车路线:ins当红网红秋千|瀑布|乌布皇宫『印尼旅游局官方推荐』',
    star: parseFloat(4+Math.random(10)),
    countnum:'10分',
    decribe:'山西特色陕西西胜多负少都是对的所是多少安',
    assess:'很好',
    add:'体育场',
    salenum:'月销99',
    recomend: [],
    time: '早10:00点前可订票'
  }
]
// console.log(stratesearchlist)
// for(var i = 0; i < 10; i++){
//   var item = {
//     id: 'img'+i,
//     itemimage: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + i + '张图片'),
//     alt: Mock.mock('@url()'),
//     href: Mock.mock('@url()'),
//     name:'老白家'+`${i}`+'腊汁肉夹馍',
//     countnum:'10分',
//     decribe:'山西特色'+`${i}`+'陕西西胜多负少都是对的所是多少安',
//     add:'体育场'+i,
//     salenum:'月销99'+i+'+'
//   }
//   foodlist.push(item);
// }
// console.log(foodlist)
// return foodlist
// }


const getAlldetail = function () {
  let alldetail = [];
  for (var i = 0; i < 10; i++){
    var item = {
      id: 'img'+ i,
      imgsrc: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + i + '张图片'),
      alt: Mock.mock('@url()'),
      href: Mock.mock('@url()'),
      name: Mock.mock('@cname'),
      grade: '等级: LV'+ `${i}`,
      card:Mock.mock('@cparagraph(1, 3)'),
      usershare:Mock.mock('@cparagraph'),
      time: Mock.mock('@time'),
      like:Mock.mock('@natural(100, 600)'),
      comment:Mock.mock('@natural(100, 600)')

    }
  let imglist = [];
  for(var j = 0; j < 3;j++){
    let items = {
      id: 'img'+ j,
      itemimage: Mock.Random.image('200x100', Mock.mock('@color'), '#FFF', 'png', '我是第' + j + '张图片'),
      alt: Mock.mock('@url()'),
      href: Mock.mock('@url()'),
    }
    imglist.push(items)
  }
  item.imglist=imglist
    alldetail.push(item);
  }

  return alldetail
}
console.log(getAlldetail(),"66666")




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
//详情页
// function getSenseDetail(i) {
//   return  {
//     id: i,
//     itemImage:Mock.Random.image('300x100', Mock.mock('@color'), '#FFF', 'png', '景点' + i + '张图片'),
//   }
// }

Mock.mock('http://www.daxunxun.com/stratesearch', 'get', getstrasearchlist)
Mock.mock('http://www.daxunxun.com/foodlist', 'get', getFoodlist)
Mock.mock('http://www.daxunxun.com/senselist', 'get', getSenselist)
Mock.mock('http://www.daxunxun.com/sensehotlist', 'get', getSensehotlist)
// Mock.mock('http://www.daxunxun.com/live', 'get', getHomelivelist)
Mock.mock('http://www.daxunxun.com/banner','get',getBanner)
Mock.mock('http://www.daxunxun.com/liveimgs','get',getLiveimglist)

for (let i = 0;i<scenicData.length;i++) {
  Mock.mock('http://www.daxunxun.com/sensedetail/img'+i, 'get', scenicData[i])
}
Mock.mock('http://www.daxunxun.com/alldetail','get',getAlldetail);
