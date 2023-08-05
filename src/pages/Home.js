import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

const Home = ()=>{

    const API_URL = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try{
            const output = await fetch(API_URL);
            const data = await output.json();
            setProducts(data);
        }
        catch(error){
            console.log("Unable to fetch data!");
            setProducts([]);
        }

        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    return (
        <div className="home-page">
            {
                loading ? <Spinner/> : <div className="card-container">{ products.map((product)=>{
                     return <Card key={product.id} product={product}/>
                })}</div>
            } 
        </div>
    )
}

export default Home;