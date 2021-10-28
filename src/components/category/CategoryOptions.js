import React,{ useState,useEffect } from 'react';
import axiosApi from '../../util/axios';


const CategoryOptions = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async ()=>{
            try {
                const response = await axiosApi.get('/categories');
                console.log("response categories: ",response);
                setCategories(response.data.categories);
            } catch (error) {
                console.log(error);
            }
        }

        getCategories();
        
    }, []);

    return (
        <>
            {
                categories &&
                categories.map( (item) => 
                    <option value={item.category_id} key={item.category_id} >
                        {item.category_name}
                    </option>
                )
            }
        </>
    )
}

export default CategoryOptions
