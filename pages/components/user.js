export default function User({users}){
 return(
   <>
    {
    users.map((user)=>{
       return(
        <div>
        <h1>Name:{user.name}</h1>
        <h1>Gender:{user.gender}</h1>
    </div>
       )
    })
   }
   </>
 )
}


export async function getStaticProps(){
    const data=await fetch('http://localhost:3000/api/users');
    const users = await data.json();
    return{
        props:{users}
    }
}