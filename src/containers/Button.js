import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';

let Button = ({channel, getData, title}) => {
return (<button className="btn btn-primary btn-lg btn-block" onClick={() =>  { getData(channel) } } style={{width:'50%'}} >{title}</button>);
}

const mapStateToProps = (state) => ({channel: state.channel})

const mapDispatchToProps = {
	getData: fetchData
}

Button = connect(mapStateToProps, mapDispatchToProps) (Button);

export default Button;
