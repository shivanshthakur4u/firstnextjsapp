import React,{useState,useEffect} from 'react'
import Layout from '../layout/layout';
const ClientSide = () => {
    const [data, setdata]=useState('');
    const [isLoading, setisLoading]=useState(false);

    useEffect(()=>{
        setisLoading(true)
        setTimeout(()=>{
            setisLoading(false)
           setdata({title:"Client side rendering Title",description:"Client side rendering Description"})
        },[3000])
    },[])


  return (
<>
    {
        isLoading ? <h1>Loading.........</h1>:<Layout>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
</Layout>
    }
</>
  )
}

export default ClientSide