import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
export default function Home() {

    const navigat = useNavigate();

  const [post, setPost] = useState([]);
  const[mode,setMode]=useState(false)
  const[perpage,setPerpage]=useState(10)
  const [pagination,setPagtion]=useState({
      start:0,     
      end:perpage    
  })

  const onPagination=(start,end)=>{
       setPagtion({start:start,end:end})
  }

  useEffect(() => {
    const getstu = async () => {
      let url = "https://jsonplaceholder.typicode.com/posts";
      try {
        const res = await axios.get(url);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getstu();
  }, []);


  const LOGOUT=()=>{
    localStorage.setItem("loginCondition",JSON.stringify({login:false}))
    navigat("/")
  }
  return (
    <div className={`conatainer p-5  ${!mode?"bg-light":"bg-dark"}`}>
    <button className="btn btn-danger " onClick={LOGOUT}>logOut</button>
    <div className="container ">
    <h4>Home Page</h4>
    <div class="form-check form-check-inline">
  <input class="form-check-input" 
  type="checkbox" 
  id="inlineCheckbox1" 
  onClick={()=>setMode( !mode?true: false)} />
  <p>Mode</p>
</div>
    <div className="row">
        { post.slice(pagination.start,pagination.end).map((ele) => {
          return (
            <div class="card mb-3">
            <h4> #{ele.id} : {ele.title}</h4>
              <div class="card-body">{ele.body}</div>
            </div>
          );
        })}
        { post.length>0&& <Pagination perpage={perpage} total={post.length} onPagination={onPagination}/>}
      </div>
    </div>
    
    </div>
  );
}
