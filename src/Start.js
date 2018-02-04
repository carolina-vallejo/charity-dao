import React, { Component } from 'react';
import { Web3Provider } from 'react-web3';
import './styles/App.css';
import logo from './imgs/logo.svg';




class Start extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){ 
    this.props.start(e);
  }

  render() {
    var isUnlock=this.props.unlock;


    return (
      <div className="Start">
        <div className="Start__inner">
          <img className="Start__logo" src={logo}/>
          <div className="Start__group">
            <div className="Start__title">
              Donate in confidence
            </div>
            <div className="Start__txt">
              vote for the projects you would like to see funded and keep track of where every last cent goes
            </div>
            {
              isUnlock?

              <div 
              className={`Start__btn-start ${this.props.className}`}
              onClick={this.handleClick}>{this.props.text}</div>

              :
              <div className={
                `Start__btn-start ${this.props.className}`}>
                {this.props.text}
              </div>

            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
