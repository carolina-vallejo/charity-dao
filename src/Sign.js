import React, { Component } from 'react';
import './styles/App.css';
import PropTypes from 'prop-types';

class Sign extends Component {
  constructor(props, context){
    super(props)

    this.context = context;
  }


  render() {
    
    console.log(this.context.web3.accounts[0]);

    return (
      <div className="Sign">
        <div className="Sign__inner">
          <div className="Sign__group">
            <div className="Sign__title">
              Sign in
            </div>
            <div className="Sign__form">
              <div className="Sign__account">
                <div className="Sign__label">Wallet address:</div>
                  {this.context.web3.accounts[0]}
              </div>   
              <div className="Sign__form-group">
                <div className="Sign__label">
                  Nickname:
                </div>
                <input className="Sign__input" 
                  type="text"
                  onChange={(e)=>this.props.onChange(e)}/>
              </div>                         
              <div className="Sign__form-group">
                <div className="Sign__label">Email:</div>
                <input className="Sign__input" type="text"/>
              </div>

            </div>
            <div 
              className={`Sign__btn-start ${this.props.className}`}
              onClick={()=>this.props.onClick()}>Go</div>
          </div>
        </div>
      </div>
    );
  }
}
Sign.contextTypes = {
  web3: PropTypes.object
};
export default Sign;
