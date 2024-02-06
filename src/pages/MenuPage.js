import React from 'react';
import MenuListContainer from '../containers/store/MenuListContainer';
import MenuHeader from '../components/common/MenuHeader';

const MenuPage = ({match}) => {
    let { storeId, name } = match.params;
    console.log(name);
    return(
        <>
        <MenuHeader name={name}/>
        <MenuListContainer/>
        </>    
    );
};

export default MenuPage;