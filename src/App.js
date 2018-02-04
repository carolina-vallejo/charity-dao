import React, { Component } from 'react';
import { Web3Provider } from 'react-web3';
import Start from './Start'
import Sign from './Sign'
import List from './List'
import './styles/App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      screen : 0
    }
    this.start = this.start.bind(this);
    this.nickname = this.nickname.bind(this);

  }
  start(){
    console.log('xxx');
    this.setState(({screen}) => {
      return {
        screen : screen+=1
      }
      
    })
  }

  nickname(e){
    console.log(e)
  }

  render() {
    var render=null;
    if(this.state.screen===0) {
      
      render = <Start 
        unlock={true}
        className="Start__btn-start_active"
        start={this.start} 
        text="Start Founding"/>;

    } else if(this.state.screen===1) {

      render = [<Start 
              key={'start'}
              unlock={true}
              className="Start__btn-start_active"
              start={this.start} 
              text="Start Founding"/>,
              <input key={'xxx'}
               type="text"
              onChange={this.nickname}/>,
              <Sign key={'sign'}
              insertNickname={this.nickname}
              start={this.start} />];

    } else {
      render=<List start={this.start}/>;
    }

    return (
      <Web3Provider
        web3UnavailableScreen={
          () => 
            <Start
            unlock={false}
            className="Start__btn-start_inactive"
            text={
              <span>You need to install <br/><a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">MetaMask</a> in your browser</span>
              }/>}

        accountUnavailableScreen={
          () => 
            <Start
              unlock={false}
              className="Start__btn-start_inactive" 
              text="Please unlock your wallet!"/>}>
          
          {render}

      </Web3Provider>
     
    );
  }
}

export default App;
