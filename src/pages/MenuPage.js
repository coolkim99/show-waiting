import React from 'react';
import MenuListContainer from '../containers/store/MenuListContainer';
import MenuHeader from '../components/common/MenuHeader';
import NavBar from '../components/common/NavBar';

const MenuPage = ({match}) => {
    let { storeId, name } = match.params;
    console.log(name);
    return(
        <>
        <NavBar/>
        <MenuHeader name={name}/>
        <MenuListContainer/>
        </>    
    );
};

export default MenuPage;