import React, { Component } from 'react';
import { Web3Provider } from 'react-web3';
import './styles/App.css';
import logo from './imgs/logo-color.svg';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./imgs/', false, /\.(png|jpe?g|svg)$/));



class Start extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){ 
    this.props.start(e);
  }

  render() {
    return (
      <div className="List">
        <div className="List__inner">
          

          <div className="List__header">
            <div className="List__user">
              <div className="List__header"></div>
              <div className="List__header"></div>
            </div>
            <img className="List__logo" src={logo}/>

          </div>          
          <div className="List__group">
            <div className="List__header">
              <div className="List__header">
                <div className="List__header"></div>
                <img src={images[1]}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
