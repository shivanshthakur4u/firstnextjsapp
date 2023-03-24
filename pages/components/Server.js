import React from 'react'
import Layout from '../layout/layout'
const Server = (props) => {
  return (
    <Layout>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </Layout>
  )
}

export default Server

export async function getServerSideProps(){
   const data={title:"Server Side Props Title", description:"Server Side Props description"}

    return(
        
       {
        props:data
       }
        
    )
}