import {Component} from 'react'
import './CouponButton.css'

class CouponButton extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render = () => {
        return ( 
        <div className="button" onClick={() => {this.props.onClick(this.props.data.prize_id)}}>
        <img src={`https://circlekgames.ca/images/prizes/${this.props.data.image_en}`}/>
        <div className="text">{this.props.data.name_en}</div>
        </div>
        )
    }
}

export default CouponButton;