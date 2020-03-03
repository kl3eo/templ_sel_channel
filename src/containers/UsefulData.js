import React from 'react';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';


let UsefulData = ({loading,chunks}) => {
	let usefulData = '';
	
	if (chunks) usefulData = chunks.map((item,index) => (<div key={`${index}`}>
		<NewItem item={chunks[index]} />
	</div>));
	
	if (loading) usefulData = '<div>...loading...</div>';

	return (<div>{usefulData}</div>);
};

const mapStateToProps = (state,chunks) => ({loading: state.loading, chunks: state.usefulData});

UsefulData = connect(mapStateToProps) (UsefulData);

export default UsefulData;
