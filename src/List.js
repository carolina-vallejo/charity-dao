import React, { Component } from 'react';
import './styles/App.css';
import logo from './imgs/logo-color.svg';
import PropTypes from 'prop-types';
import Box from './Box';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./imgs/', false, /img\.(png|jpe?g|svg)$/));

class List extends Component {
  constructor(props, context){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){ 
    this.props.start(e);
  }

  render() {

   var nickName=this.props.nickName;

    return (
      <div className="List">
        <div className="List__header">
          <div className="List__inner">
            
              <img className="List__logo" 
                src={ logo}
                alt="logo"/>
              <div className="List__user">
              <div className="List__name">
                {nickName}
                </div>
                <div className="List__wallet">
                {this.context.web3.accounts[0]}
                </div>
            
              </div>
            
          </div>
        </div>
        <div className="List__main">
          <div className="List__inner">
            <div className="List__column">
              {
                images.map((item, i)=>{
                  return(
                    <Box key={`box${i}`}
                    img={item}/>
                  )    
                })
              }
            </div>

          </div>              
        </div>
      </div>
    );
  }
}
List.contextTypes = {
  web3: PropTypes.object
};

export default List;
