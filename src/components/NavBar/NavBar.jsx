import React, { useState } from 'react'
import "./_NavBar.scss";
import CartWidget from "./subcomponents/CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [Categ, setCateg] = useState(false);

    let ClickCategories = () => {
        setCateg(!Categ)

        let ContCateg = document.getElementById("ContCateg");

        if(ContCateg.classList.contains("none")){ 
            ContCateg.classList.remove("none");
            ContCateg.classList.add("visible");
        }
        else{
            ContCateg.classList.remove("visible");
            ContCateg.classList.add("none");
        }
    }

    return(
        <>
            <div className='StyleNavbar'>
                <div className='StyleNavbar__ContainerStyleNavbar'>
                    <Link to="/">
                        <div className='ContainerStyleNavbar__ContainerLogo'></div>
                    </Link>
                    <CartWidget />
                </div>
            </div>

            <div className='SubNavbar'>
                <button className='SubNavbar__ButtonCategories' onClick={ClickCategories}><h2 className='ButtonCategories__Text'>Categorías</h2></button>
            </div>

            <div id='ContCateg' className='ContainerCategories none'>
                <div className='FlexContainer'>
                    <Link to={`/category/DomesticProducts`}>
                        <button className='ContainerCategories__Buttons'><p className='Buttons__Text'>Productos del hogar</p></button>
                    </Link>

                    <Link to={`/category/KitchenProducts`}>
                        <button className='ContainerCategories__Buttons'><p className='Buttons__Text'>Productos de cocina</p></button>
                    </Link>

                    <Link to={`/category/HomeAppliances`}>
                        <button className='ContainerCategories__Buttons'><p className='Buttons__Text'>Electrodomésticos</p></button>
                    </Link>
                </div>
            </div>
        </>    
    )
}

export default Navbar;