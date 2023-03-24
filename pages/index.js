import Head from 'next/head'
import Link from 'next/link'
import Layout from './layout/layout'
import {NavLinkData} from './components/navlink'
import { useRouter } from 'next/router'
export default function Home() {


  return (
    <>
      <Head>
        <title>Home Page</title>
        
      </Head>
     <div>
 
      <Layout>
      {
        NavLinkData.map((link=>{
          return(
            <nav>
              <ul key={link.id}>
               <Link href={link.path}><li>{link.name}</li></Link>
              </ul>
            </nav>
          )
        }))
      }
      
      <h1>Data</h1>

      </Layout>
     </div>
    </>
  )
}
