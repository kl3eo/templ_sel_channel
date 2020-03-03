import React from 'react';
import { connect } from 'react-redux';
import { setChannel } from '../actions';

let Channel = ({channelName, channelString, active, onClick}) => {

return (<div onClick={onClick} className={(active === channelString) ? 'orange' : ''} ><p>{channelName}</p></div>);

};

const mapStateToProps = (state) => ({
	active : state.channel
});

const mapDispatchToProps = (dispatch,ownProps) => { return {
	onClick : () => {dispatch(setChannel(ownProps.channelString))}
}};

Channel = connect(mapStateToProps,mapDispatchToProps) (Channel);

export default Channel;
