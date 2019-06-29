import React from 'react';
// import Homebanner from '@/components/homebox/Homebanner'
import '@/views/css/live.scss'
import userLogin from '@/assets/userlogin.png';
import { Carousel, WingBlank} from 'antd-mobile';

const listData = [{
  h3 : '北海道8日游——纪念2018年的雪国探险',
  imgs:'https://p1-q.mafengwo.net/s12/M00/7F/76/wKgED1w7JaKAWZHSAABUcC5kEig84.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
  img: 'https://n1-q.mafengwo.net/s14/M00/54/E2/wKgE2l0URnmALCoCAA2kNzWVF_A88.jpeg?imageMogr2%2Fthumbnail%2F%21390x260r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21390x260%2Fquality%2F90',
  span:'在北海道',
  eye: '5889',
  num: '58951'
},
{
  h3 : '偷得浮生三日闲，在广州食遍人间烟火——..',
  imgs: 'https://n1-q.mafengwo.net/s12/M00/50/80/wKgED1wdKcqAfjLeAAekCYafSWA46.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
  img: 'https://n3-q.mafengwo.net/s14/M00/36/22/wKgE2lz_dDGAUkiDAAyH0jfHEPY311.jpg?imageMogr2%2Fthumbnail%2F%21390x260r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21390x260%2Fquality%2F90',
  span:'在斯里兰卡',
  eye: '58859',
  num: '59961'
},
{
  h3 : '泰好玩之带着父母去清迈清莱【内含丛林飞..',
  imgs: 'https://n1-q.mafengwo.net/s11/M00/DD/46/wKgBEFr9PFqASoeNAABkAMNrtbM00.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
  img: 'https://p2-q.mafengwo.net/s14/M00/4B/38/wKgE2l0LVVqAc_KAAAweJlxc7Cs963.JPG?imageMogr2%2Fthumbnail%2F%21390x260r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21390x260%2Fquality%2F90',
  span:'在威尼斯', 
  eye: '5889',
  num: '58951'
}
]
console.log(listData.h3,7777)
class Com extends React.Component {
  componentDidMount () {
    fetch('api/getModels?type=1').then(res=>res.json()).then(data =>{
      console.log(data)
    })
  }
  state = {
    data: ['https://b1-q.mafengwo.net/s14/M00/52/71/wKgE2l0UmkqAd9SeAAGy9Q_JjJM145.jpg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
           'https://p3-q.mafengwo.net/s14/M00/1A/34/wKgE2l0TTvSABiZfAAMAtEYHv7k591.jpg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90', 
           'https://b4-q.mafengwo.net/s14/M00/59/CF/wKgE2l0Rg22AVLlOAANrgvjc6So487.jpg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
            'https://p4-q.mafengwo.net/s14/M00/8B/F1/wKgE2l0VoC2AMPCeAAKRA_lL0cc518.jpg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90'
          ],
          imgHeight: 176,
  }
  componentDidMount() {
  }

  render(){
    console.log(this.props)
    return (
      <div className="box">
        <div>
          <div className="liveheader">
            <img src= { userLogin } alt=""/>
            <p className = "title">咩咩旅行</p>
          </div>
          <div className="findbg">
            <div className="findtop">
              <span className = "day">28</span>
              <span className="year">
                <em>2019</em>
                <em>JUN</em>
              </span>
              <span className="text">锋首纪念</span>
            </div>
            <WingBlank>
              <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                dots={ true }
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => this.setState({ slideIndex: index })}
              >
              {this.state.data.map((val, index) => (
              <div
                className="findbanner"
                key={val} 
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                  />
                  < div className="livebottom">
                    <p className = "top">坐穿越欧亚的铁路，去零下40度..</p>
                    <p className = "my">我是<span>尾巴小叔</span>我在<span>贝加尔湖</span></p>
                  </div>
                </div>
                ))}
                
              </Carousel>
              </WingBlank>
          </div>
          

          {
            listData.map((item, index)=> {
              return (<div className="findcontent"  key = { index } >
                <div className="findleft">
                  <h3 className = "findtitle">{ item.h3 }</h3>
                  <div className="findlast">
                    <div className="user">
                      <img src= { item.imgs } alt=""/>
                      白白娜...
                      <span className = "m18">{ item.span }</span>
                    </div>
                    <div className="num">
                        <i className = "iconfont iconeye1"></i>
                        <span className = "eye">{ item.eye }</span>
                        <i className = "iconfont iconxinxi1"></i>
                        <span className = "eye">{ item.num }</span>
                      </div>
                    </div>
                </div>
                <div className="findright">
                  <img src= { item.img } alt=""/>
                </div>
            </div>)
            })
          }


          {/* <div className="findcontent">
            <div className="findleft">
              <h3 className = "findtitle">北海道8日游——纪念2018年的雪国探险</h3>
              <div className="findlast">
                <div className="user">
                  <img src="https://p4-q.mafengwo.net/s12/M00/8E/95/wKgED1vMbB6AJnm-AAC_-NXcrL439.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt=""/>
                  白白娜...
                  <span className = "m18">在北海道</span>
                </div>
                <div className="num">
                    <i className = "iconfont iconeye1"></i>
                    <span className = "eye">25888</span>
                    <i className = "iconfont iconxinxi1"></i>
                    <span className = "eye">564648</span>
                  </div>
                </div>
            </div>
            <div className="findright">
              <img src="https://p2-q.mafengwo.net/s14/M00/F8/9B/wKgE2l0PTreAAvKGAAMfjHyhAto54.jpeg?imageMogr2%2Fthumbnail%2F%21390x260r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21390x260%2Fquality%2F90" alt=""/>
            </div>
        </div> */}
        </div>
      </div>
    )
  }
}
export default Com;