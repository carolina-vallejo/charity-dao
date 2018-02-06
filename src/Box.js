import React, { Component } from 'react';
import { Web3Provider } from 'react-web3';
import './styles/App.css';
import PropTypes from 'prop-types';


class Box extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){ 
    this.props.start(e);
  }

  render() {
    return (
      <div className="Box">
        <div className="Box__inner">
          <div className="Box__wrap-img">
           <img src={this.props.img}/>
            
            <div className="Box__title">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="Box__text">
            <div className="Box__donation">
              <div className="Box__donation-label">your donation</div>
              <div className="Box__donation-number">0.1338</div>
            </div>
            <div className="Box__extract">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ut tempore.
            </div>
            <div className="Box__more">+</div>
            </div>
        </div>
      </div>
    );
  }
}


export default Box;
