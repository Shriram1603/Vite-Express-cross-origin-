import React,{useEffect,useState} from 'react'


function App() {
  const [backenddata,setdata]=useState(null)

  useEffect(()=>{
    const getter= async()=>{
      try{
        const data = await fetch("http://localhost:4000/api");
        const actual= await data.json();
        console.log(actual);
        setdata(actual);

      }catch(e){
        console.log("error")
      }
    }
    getter();
  },[]);

  return (
    <div>
      {backenddata ? (
      <div>
        <h1>Users :</h1>
        <ul>
          {backenddata.users.map((user,i)=>(
            <li key={i}>{user} </li>
          ))}
        </ul>

      </div>
        ):(
          <h1>Loading .....</h1>
        )}

    </div>
  )
}

export default App