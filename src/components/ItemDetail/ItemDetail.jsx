import "./_ItemDetail.scss";
import { useState } from "react";
import swal from "sweetalert";

const ItemDetail = ({products}) => {

//=============={ Lógica de los botones de suma, resta y reset }==============
    const [count, setCount] = useState(products.quantity);

    const decrement = () => {
        if(count === 1){
            swal({
                title: "Llegaste al límite productos",
                icon: 'info'
            });
            return;
        }

        setCount(count - 1);
    }

    const increment = () => {
        if(count === 20){
            swal({
                title: "Llegaste al límite productos",
                icon: 'info'
            });
            return;
        }

        setCount(count + 1);
    }

    const reset = () => {
        setCount(1);
    }
//=============={ Lógica de los botones de suma, resta y reset }==============

    return (
        <>
            <div className="ContainerDetail">
                <div className="ContainerDetail__Section1"></div>
                <div className="ContainerDetail__Section2">
                    <div className="Section2__ContainerAlert">
                        <div className="ContainerAlert__Row1">
                            <h1 className="Row1__NameProduct">{products.name}</h1>
                        </div>

                        <div className="ContainerAlert__Row2">
                            {/* ================== CardProduct ================== */}
                            <div className="ContainerCards">
                                        <div className="ContainerCards__CardProduct">
                                            
                                                <div className="CardProduct__ContainerIMG" style={{ backgroundImage: `url(${products.img})`}}></div>
                                            
                                        </div>
                            </div>
                            {/* ================== CardProduct ================== */}
                        </div>


                        <div className="ContainerAlert__Row3">
                            <div className="Row3__Column1">
                                <div className="Column1__RowSection1"> <h2 className="RowSection1__TitleGroup">Categoría</h2> </div>
                                <div className="Column1__RowSection2"> <h2 className="RowSection2__TextGroup">{products.group}</h2> </div>
                            </div>

                            <div className="Row3__Column2">
                                <div className="Column2__RowSection1"> <h2 className="RowSection1__TitlePrice">Precio</h2> </div>
                                <div className="Column2__RowSection2"> <h2 className="RowSection2__TextPrice">{"$" + products.price}</h2> </div>
                            </div>
                        </div>


                        <div className="ContainerAlert__Row4">
                            <div className="Row4__SubRow1"> <h2 className="SubRow1__TitleQuantity">Cantidad</h2> </div>
                            <div className="Row4__SubRow2"> 
                                <h2 className="SubRow2__TextQuantity">{count}</h2> 
                                    <button className="SubRow2__PlusButton">
                                        <p className="PlusButton__Text" onClick={increment}>+</p>
                                    </button> 
                                    <button className="SubRow2__MinusButton">
                                        <p className="MinusButton__Text" onClick={decrement}>-</p>
                                    </button>{/* <br /> */}
                                    <button className="SubRow2__ResetButton">
                                        <p className="ResetButton__Text" onClick={reset}>Reset</p>
                                    </button><br />
                            </div>
                            <button className="Row4__PayButton"><p className="PayButton__Text">Comprar</p></button>
                        </div>


                    </div>
                </div>
                <div className="ContainerDetail__Section3"></div>
            </div>
        </>
    )
}

export default ItemDetail;