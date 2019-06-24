import axios from 'axios';

const baseurl = 'api/';

const requestGetData = (url)=>{
  return new Promise((resolve,reject)=>{
    axios.get(baseurl+url).then(res=>{
      resolve(res.data)
    })
  })
}
const requestPostData = (url, params) =>{
  return new Promise((resolve, reject) => {
    axios.post(baseurl + url, params).then(res => {
      resolve(res.data)
    })
  })
}

export default {
  requestGetData,
  requestPostData
}