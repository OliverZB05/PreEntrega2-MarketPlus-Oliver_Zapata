import "../Itemlist/_ItemList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../AsyncMock/AsyncMock";
import ItemList from "../Itemlist/ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { GroupID } = useParams();

    useEffect(() =>{

        //==========={ Obtención de todos los productos }===========
        if(!GroupID){
            getProducts().then(products => {
                setProducts(products)
            })

            .catch(error => {
                setError(error)
            })

            .finally(() => {
                setLoading(false)
            })
        }
        //==========={ Obtención de todos los productos }===========


        //==========={ Filtrado de productos del hogar }===========
        if(GroupID === "DomesticProducts"){
            getProducts(GroupID).then(products => {
                if(products){
                    setProducts(products.filter(prod => prod.group === "Productos del hogar"))
                }
            })

            .catch(error => {
                setError(error)
            })

            .finally(() => {
                setLoading(false)
            })
        }
        //==========={ Filtrado de productos del hogar }===========


        //==========={ Filtrado de productos de cocina }===========
        if(GroupID === "KitchenProducts"){
            getProducts(GroupID).then(products => {
                if(products){
                    setProducts(products.filter((prod) => prod.group === "Productos de cocina"))
                }
            })

            .catch(error => {
                setError(error)
            })

            .finally(() => {
                setLoading(false)
            })
        }
        //==========={ Filtrado de productos de cocina }===========


        //==========={ Filtrado de productos de electrodomésticos }===========
        if(GroupID === "HomeAppliances"){
            getProducts(GroupID).then(products => {
                if(products){
                    setProducts(products.filter((prod) => prod.group === "Electrodomésticos"))
                }
            })

            .catch(error => {
                setError(error)
            })

            .finally(() => {
                setLoading(false)
            })
        }
        //==========={ Filtrado de productos de electrodomésticos }===========

    }, [GroupID])

    if(loading){
        return( 
            <div className="ContainerLoading">
                <h1 className="ContainerLoading__TextLoading">Cargando...</h1> 
            </div>
        );
    }

    if(error){
        return <h1>Hubo un error, pida el libro de quejas</h1>
    }

    return(
        <>
                <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;