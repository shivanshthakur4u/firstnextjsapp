import React from 'react'
import Layout from '../layout/layout'
const Static = ({data}) => {
  return (
    <><Layout>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        </Layout>
    </>    
  )
}

export default Static


export  async function getStaticProps() {

    const data={title:"My first title",description:"my first description"}
  return (
    {
        props:{data}
    }
  )
}

