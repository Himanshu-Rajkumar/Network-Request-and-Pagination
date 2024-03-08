import { useEffect, useState } from "react"
import PostItems from "./PostItems/PostItems"

function HandleLoding(){
  return <h1>Loding...</h1>
}
function HandleError(){
  return <h1>Something went wrong...</h1>
}

function App() {
  const [data,setData]=useState([])
  const [loding,setLoding]=useState(false)
  const [error,setError]=useState(false)
  const [page,setPage]=useState(1)

  useEffect(()=>{
    fetchAndUpdatData(page)
  },[page])

  async function fetchAndUpdatData(page){
    setLoding(true)
   try {
    
    let response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    let finalResponse=await response.json()
    setData(finalResponse)
    setLoding(false)
    
   } catch (error) {
    setError(true)
    setError(false)
    
   }
  }

  if(loding){
    return <HandleLoding/>
  }
  if(error){
    return  <HandleError/>
  }

  return <>
    <h1>Fetching Data</h1>
    <div>
      <button onClick={()=>setPage(page-1)}>Previous</button>
      <p>{page}</p>
      <button onClick={()=>setPage(page+1)}>Next</button>
    </div>

    <br />
    {
      data.map((items)=>{
        return <PostItems key={items.id} items={items}/>
      })
    }


  </>


}

export default App