import "../ItemDetail/_ItemDetail.scss";
import { useEffect, useState } from "react";
import { getProducts } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { ProductID } = useParams()

    useEffect(() =>{

    //==========={ Obtención de producto seleccionado }===========
        getProducts(ProductID).then(products => {
            setProducts(products[ProductID - 1])
        })

        .catch(() => {
            setError(true)
        })

        .finally(() => {
            setLoading(false)
        })
    //==========={ Obtención de producto seleccionado }===========

    }, [ProductID])


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

    return (
        <>
            <ItemDetail products={products}/>
        </>
    )
}

export default ItemDetailContainer;