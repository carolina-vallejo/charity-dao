import React, { Component } from 'react';
import './styles/App.css';
import logo from './imgs/logo.svg';


class Start extends Component {

  render() {
    var isUnlock=this.props.unlock;

    return (
      <div className="Start">
        <div className="Start__inner">
          <img className="Start__logo" 
            src={logo}
            alt="logo"/>
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
              onClick={this.props.onClick}>{this.props.text}</div>

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
