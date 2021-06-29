import React from "react";
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card'
import ButtonComponent from "./button.component";
import {ReactComponent as LQuote} from './../../assets/left-quote-svgrepo-com.svg';
import {ReactComponent as RQuote} from './../../assets/right-quote-svgrepo-com.svg';

const CardComponent = ({store}) => {
    let props;
    let color;
    if(!store.quote['item']){
        props = store.quote[0]
        color = "#3da4ab"
    }else {
        props = store.quote['item']
        color = store.quote['item'].color
    }
    return [
        <Card id={'quote-box'} style={{backgroundColor:"#fff"}}>
            <Card.Body>
                <Card.Text className="mt-4 display-4" id={'text'}
                           style={{color: color, textShadow: '0px 4px 3px rgba(0,0,0,0.4),\n' +
                        '             0px 8px 13px rgba(0,0,0,0.1),\n' +
                        '             0px 18px 23px rgba(0,0,0,0.1)'}}>
                   <LQuote style={{width: 40, fill: color, marginTop: '-5%', marginRight: '0.2em'}}/>{props.quote}<RQuote style={{width: 40, fill: color,  marginBottom: '-5%', marginLeft: '0.2em'}}/>
                </Card.Text>
                <Card.Title  id={'author'} className="text-right mt-4">
                    <h5 className="card-title blockquote-footer">{props.author}</h5>
                </Card.Title>
                <ButtonComponent/>
            </Card.Body>
        </Card>,
        <p className="text-center mt-3" style={{color: "#ffffff"}}>by Miloš Štrbo</p>
    ]
}

const mapStateToProps = (state) => {
    return {store: state}
};


export default connect(mapStateToProps, null)(CardComponent);

