import React from 'react';
import { Carousel } from 'antd-mobile';

const Com =({homebannerlist}) =>(
  <Carousel
  autoplay
  infinite
  style={{ display: 'inline-block', width: '100%', height: 176 }}>
  {homebannerlist.map((val, index) => (
    <a key={index} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%' }} >
      <img src={val.itemimage} alt="" style={{ width: '100%', verticalAlign: 'top' }} /></a>
  ))}
</Carousel>
)
export default Com;