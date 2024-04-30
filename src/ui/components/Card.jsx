import { useEffect, useState } from "react";

export const Card = () => {

    const [product, setProduct] = useState({});
//cambiando el numero en el fetch('https://dummyjson.com/products/1 al 100') 
    useEffect(() => {
        fetch('https://dummyjson.com/products/98')
        .then(res => res.json())
        .then(data => {setProduct(data)})     
    }, []);

    return (
        <div>
            <p>Titulo: {product.title}</p>
            <p>Descripción: {product.description}</p>
            <p>USD$: {product.price}</p>
            <p>Marca: {product.brand}</p>
        </div>
    )
};




/*import { useEffect, useState } from "react";

export const Card = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
        .then(res => res.json())
        .then(data => {setProduct(data)})     
    }, []);

    return (
        <div>
            <p>{product.title}</p>
            <p>Descripcion: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    )
};*/