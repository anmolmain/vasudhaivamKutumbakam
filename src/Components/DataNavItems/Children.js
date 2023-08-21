// import "./Data.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import convertToAOO from "./DataFetching"
import Datanav from "./Datanav"
import Cards from "./Cards"
import Preloader from "../../Preloader/Preloader"
const Children = () => {
    const [post, SetPost] = useState([]);
    const [isPending,setIsPending]= useState(true);
    useEffect(() => {
        axios.get("https://ngowebsite-a4036-default-rtdb.firebaseio.com/children.json")
            .then(res => {
                console.log(convertToAOO(res.data));
                SetPost(convertToAOO(res.data))
                setIsPending(false);

            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Datanav></Datanav>
            {isPending && <div><Preloader/></div>}
            <Cards post={post}/>
        </>
    )
}

export default Children
