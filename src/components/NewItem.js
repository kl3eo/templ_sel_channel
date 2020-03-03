import React from 'react';

const NewItem = ( { item } ) => {console.log('here!');console.log(item.uData);
return (<div>
	{item.uData}
</div>);
};

export default NewItem;
