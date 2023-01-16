import "./_ItemList.scss";
import { Link } from "react-router-dom";

const ItemList = ({products}) => {

    //=========================={ Filtrados del array de productos }==========================
    const DomesticProducts = products.filter((prod) => prod.group === "Productos del hogar");
    const KitchenProducts = products.filter((prod) => prod.group === "Productos de cocina");
    const HomeAppliances = products.filter((prod) => prod.group === "Electrodomésticos");
    //=========================={ Filtrados del array de productos }==========================

    return (
    <div className="ContainerSections">
        <div className="ContainerSections__Section1">
            <div className="Section1__row1"> <h2 className="row1__RowTitle">Productos del hogar</h2> </div>
            <div className="Section1__row2">
            
            {/* =========================={ Cards }==========================*/}
                <div className="ContainerCardMaster_1">
                    {DomesticProducts.map( prod => (
                            <div key={prod.id} className="ContainerCards">
                                    <div className="ContainerCards__CardProduct">
                                        
                                            <div className="CardProduct__ContainerIMG" style={{ backgroundImage: `url(${prod.img})`}}></div>
                                            <div className="CardProduct__ContainerText">
                                                <h2 className="ContainerText__Text1">{prod.name}</h2>
                                                <h3 className="ContainerText__Text2">{"$" + prod.price}</h3>
                                            </div>
                                            <div className="CardProduct__ContainerButtonPay">
                                        <Link to={`/detail/${prod.id}`}>
                                                    <button className="ContainerButtonPay__ButtonPay"><p className="ButtonPay__Text">Pagar</p></button>
                                                </Link>
                                            </div>
                                        
                                    </div>
                            </div>
                    ))}
                </div>
            {/* =========================={ Cards }==========================*/}

            </div>
        </div>

        <div className="ContainerSections__Section2">
            <div className="Section2__row1"> <h2 className="row1__RowTitle">Productos de cocina</h2> </div>
            <div className="Section2__row2">

            {/* =========================={ Cards }==========================*/}
                <div className="ContainerCardMaster_2">
                    {KitchenProducts.map( prod => (
                            <div key={prod.id} className="ContainerCards">
                                    <div className="ContainerCards__CardProduct">
                                        
                                            <div className="CardProduct__ContainerIMG" style={{ backgroundImage: `url(${prod.img})`}}></div>
                                            <div className="CardProduct__ContainerText">
                                                <h2 className="ContainerText__Text1">{prod.name}</h2>
                                                <h3 className="ContainerText__Text2">{"$" + prod.price}</h3>
                                            </div>
                                            <div className="CardProduct__ContainerButtonPay">
                                                <Link to={`/detail/${prod.id}`}>
                                                    <button className="ContainerButtonPay__ButtonPay"><p className="ButtonPay__Text">Pagar</p></button>
                                                </Link>
                                            </div>
                                        
                                    </div>
                            </div>
                    ))}
                </div>
            {/* =========================={ Cards }==========================*/}

            </div>
        </div>


        <div className="ContainerSections__Section3">
            <div className="Section3__row1"> <h2 className="row1__RowTitle">Electrodomésticos</h2> </div>
            <div className="Section3__row2">

                {/* =========================={ Cards }==========================*/}
                <div className="ContainerCardMaster_3">
                    {HomeAppliances.map( prod => (
                            <div key={prod.id} className="ContainerCards">
                                    <div className="ContainerCards__CardProduct">
                                        
                                            <div className="CardProduct__ContainerIMG" style={{ backgroundImage: `url(${prod.img})`}}></div>
                                            <div className="CardProduct__ContainerText">
                                                <h2 className="ContainerText__Text1">{prod.name}</h2>
                                                <h3 className="ContainerText__Text2">{"$" + prod.price}</h3>
                                            </div>
                                            <div className="CardProduct__ContainerButtonPay">
                                                <Link to={`/detail/${prod.id}`}>
                                                    <button className="ContainerButtonPay__ButtonPay"><p className="ButtonPay__Text">Pagar</p></button>
                                                </Link>
                                            </div>
                                        
                                    </div>
                            </div>
                    ))}
                </div>
            {/* =========================={ Cards }==========================*/}

            </div>
        </div>
    </div>
    )
}

export default ItemList;
