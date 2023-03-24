import { useRouter } from 'next/router';
import {AllPostdata} from '../lib/data'
export default function Post({post}) {

    const router = useRouter();
    const {id} = router.query;
    console.log(id)
return(
    <article>
    <button onClick={()=>{
        router.push('/')
    }}></button>
        {
            post.map((p)=>(
                <div key={p.id}>
                <h1>{p.title}</h1>
                <h1>{p.description}</h1>
                </div>
            ))
        }
    </article>
)
}

export function getStaticProps({params}){
    const {id}=params;
    const post=AllPostdata(id);
return{
    props:{post}
}
}

export function getStaticPaths(){

    const datas=AllPostdata()
    const paths=datas.map(post=>({
        params:{id:post.id.toString()}
    }))

    return{
        paths,
        fallback:false
    }

}