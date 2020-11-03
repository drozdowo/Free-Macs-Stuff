import "./App.css";
import { Component } from "react";
import CouponButton from './Components/CouponButton/CouponButton.js'
import axios from 'axios'
import coupons from './data/coupons.js'
import RedeemPage from './Components/RedeemPage/RedeemPage.js'

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

class App extends Component{
  constructor() {
    super();
    this.state = {
      coupons: null,
      selectedCoupon: null
  }
}

getLoadingScreen = () => {
  return (
    <div className="App"> Loading coupons... </div>
  )
}

componentDidMount = () => {
  this.getCoupons();
}

getCoupons = async () => {
  let coups = [];
  coupons.forEach(obj => {
      coups.push(<CouponButton data={obj} onClick={this.displayCoupon}/>)
  });
  this.setState({coupons: coups});
  }

  displayCoupon = (prize_id) => {
    console.log('clicked coupon ' + prize_id);
    let found = coupons.find(obj => {
      return obj.prize_id == prize_id
    })
    this.setState({
        ...this.state,
        selectedCoupon: found
    });
    console.log('display: ', found);
  }

  goBack = () => {
    this.setState({
      ...this.state,
      selectedCoupon: null
  });
  }


  render = () => {
    let render;
    if (!this.state.coupons){
      render = <div className="App"> loading... </div>
    } else if  (this.state.selectedCoupon){
      render = <div className="App"><RedeemPage data={this.state.selectedCoupon} goBack={this.goBack}/></div>
    } else {
      render = (
      <div className="App">
        <h1> HOW TO USE:</h1>
        <h3> Go to location, get the items you wish to redeem, have them be rung up, then select the coupon from below, and let it be scanned.</h3>
        <h4> ProTip: the 'Store Locator' button brings you back here.</h4>
        <div className="headertext">Available Coupons:</div>
       {this.state.coupons}
       </div>)
    }
    return render;
  };
}

export default App;
