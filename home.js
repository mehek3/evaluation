import { useState, useEffect } from "react";
import axios from 'axios';
import {useSearchParam} from 'react-router-dom';
import {Grid , GridItem , Button, Select} from 

const Home =() => {
    const[ products, setProducts]= useState([]);
    const[ loading, setLoading]= useState(false);
     const[ error, setError]= useState(null);
     const[ sort, setSort] = useState('ascending');
     const[caregory,setCategory]= useState('all');
     const {searchParams}= useSearchParam();
     useEffect(()=> {
        const fetchProducts = async () => {
            try{
                const response= await axios.get ('https://api.example.com/products');
                const ptoduct= responsse.data;
                setProducts(products);
            }catch (error){
                setError(error.message);
            }finally{
                setLoading(false);
            }

            };
            fetchProducts();
        },[searchParams]);
        const handleSortChange = (e) => {
            setSort(e.target.value);
        };
        const handleCategoryChange =(e) => {
            setCategory{e.target.value}
        };
        const sortedProducts= filterProducts.sort((a,b)=> {
            if (sort === 'ascending') return a.price -b.price;
        })
        return(
            <div>
                <Grid templateColumns="repeat(3,1fr)" gap=(4)>
                {sortedProducts.map((ptoducts) => (
                    <GridItem key={product.id}>
                        <Clipboard
                        title={priduct.title}
                        category={ptoduct.category}
                        price={price,category}
        

                ))}
            </div>
        )
        }
