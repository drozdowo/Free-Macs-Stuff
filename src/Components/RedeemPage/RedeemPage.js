import {Component} from 'react'
import './RedeemPage.css'

class RedeemPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            countdown: '5:00'
        };
        setInterval(this.decrementTimer, 1000);
    }

    decrementTimer = () => {
        var val = this.state.countdown;
        var min = val.split(':')[0];
        var sec = val.split(':')[1];

        if (sec > 0){
            sec--;
            if (sec < 10){
                sec = "0" + sec;
            }
        } else {
            min--;
            sec = 59;
        }

        this.setState({
            ...this.state,
            countdown: min + ":" + sec
        });
    }

    getRedeemedText = () => {
        var now = new Date();
        const monthNames = ["January", "Feburary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        var ampm = now.getHours() > 12? "pm":"am";
        return "REDEEMED " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear() + " " + now.getHours()%12 + ":" + now.getMinutes() + ":" + (now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()) + " " + ampm;
    }

    getTodaysDate = () => {
        let a = new Date();
        const monthNames = ["January", "Feburary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        return monthNames[a.getMonth()] + ' ' + (a.getDate()+11) + ', 2020';
    }

    render = () => {
        return (
            <div className="RedeemPage">
            <div className="cklogo-holder"><img className="cklogo" src="https://circlekgames.ca/CK-logo-neg-exclusive.png"/></div>
                <img className="dss" src="https://circlekgames.ca/ec_drink-snack-score.png"/>
                <img className="prizeImg" src={`https://circlekgames.ca/images/prizes/${this.props.data.image_en}`}/>
                <div className="winMsg"> You won a </div>
                <div className="prizeName"> {this.props.data.name_en} </div>
                <div className="prizeDesc"> {this.props.data.details_en}</div>
                <div className="redeemBy"> Must be redeemed by {this.getTodaysDate()}</div>
                <img className="logoTrain" src="https://circlekgames.ca/ec_logo-train.png"/>
                <div className="redeemArea"> 
                    <div className="timer"> {this.state.countdown} </div>
                    <div className="redeemBy"> Show this screen to the cashier now.</div>
                    <div className="redeemed">{this.getRedeemedText()}</div>
                    <img className="barcode" src={`https://circlekgames.ca/images/barcodes/${this.props.data.barcode}`}/>
                    <div className="plu">PLU#{this.props.data.plu}</div>
                </div>
                <div className="prizeDesc">
                    Must be redeemed in front of cashier. Pushing the Redeem button will begin a 5-minute timer and reveal the coupon code for the cashier to use. Once the 5-minute timer is up, this coupon will expire and cannot be reused. In order to be valid, the countdown timer must be counting down. Valid only at participating Circle K, Mac’s, and Couche-Tard stores in Canada.
                </div>
                <button className="backButton" onClick={this.props.goBack}> STORE LOCATOR </button>
                <div className="fineprint">†OPEN TO CANADIAN RESIDENTS ONLY, 13+, FROM 10/13/2020 @ 12:00 AM ET TO 12/07/2020 @ 11:59:59 PM ET. INSTANT PRIZES AVAILABLE DAILY (FULL DETAILS IN OFFICIAL RULES). ODDS OF WINNING AN INSTANT PRIZE DEPEND ON WHEN ENTRY PLAYED. INSTANT PRIZES DIMINISH AS AWARDED. WEEKLY PRIZES VARY EACH WEEK (TOTAL OF 16 AVAILABLE, 8 IN QUEBEC, 8 IN REST OF CANADA, ARV $300 - $650, FULL DETAILS IN OFFICIAL RULES). GRAND PRIZE: ONE (1) ULTIMATE FAMILY ROOM UPGRADE BUNDLE AVAILABLE (ARV $10,800). ODDS OF WINNING A WEEKLY OR GRAND PRIZE DEPEND ON NUMBER OF ELIGIBLE ENTRIES RECEIVED DURING THE APPLICABLE TIMEFRAME. MAXIMUM 1 GAME PLAY, 3 GRAND PRIZE ENTRIES, 3 WEEKLY PRIZE ENTRIES, AND 1 INSTANT PRIZE PER DAY PER MOBILE TELEPHONE NUMBER. MATHEMATICAL SKILL-TESTING QUESTION REQUIRED FOR WEEKLY AND GRAND PRIZE WINNERS. ®PEPSICO INC. AND RELATED COMPANIES. USED UNDER LICENCE. © PEPSICO CANADA ULC, 2020. ALL NESTLÉ TRADEMARKS ARE OWNED BY SOCIÉTÉ DES PRODUITS NESTLÉ S.A., VEVEY, SWITZERLAND AND USED UNDER LICENCE. © 2020 NESTLÉ.

NHL AND THE NHL SHIELD ARE REGISTERED TRADEMARKS OF THE NATIONAL HOCKEY LEAGUE. © NHL 2020. ALL RIGHTS RESERVED.</div>
            </div> 
        )
    }
}

export default RedeemPage;