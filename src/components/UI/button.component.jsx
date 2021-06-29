import React from "react";
import { connect } from 'react-redux';
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Twitter, Facebook } from 'react-bootstrap-icons';
import {setQuote} from "../../store/actions";
import {Helmet} from "react-helmet";



const ButtonComponent = ({store,setQuote}) => {
    let color;
    if(store.quote['item']){
        color = store.quote['item'].color
    }else{
        color = "#3da4ab"
    }
    return (
        <Container className="p-0 mt-4">
            <Helmet>
                <style>{`body { background-color: ${color}; }`}</style>
            </Helmet>
            <Row className="justify-content-between align-items-center">
                <Col md="4">
                    <a className="mr-4"  id="tweet-quote" target="_blank"  rel="noreferrer" href={"twitter.com/intent/tweet"}>
                        <Twitter style={{color: color}} className="bi" width="3em" height="2em"/>
                    </a>
                    <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/">
                        <Facebook style={{color: color}} width="3em" height="2em"/>
                    </a>
                </Col>
                <Col md="auto">
                    <Button style={{background: color, borderColor: color, boxShadow: 'none'}} onClick={() => setQuote(Math.floor(Math.random() * 100) + 1)} variant="primary" id={'new-quote'}>Next Quote</Button>
                </Col>
            </Row>
        </Container>
    )
}
const mapDispatchToProps = dispatch => ({
    setQuote: quoteID => dispatch(setQuote(quoteID))
});
const mapStateToProps = (state) => {
    return {store: state}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonComponent)
