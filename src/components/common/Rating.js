import React from 'react';
class Com extends React.Component { 
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      star: []
    }
  }
  render () {
    return (
      <div></div>
    )
  }
}