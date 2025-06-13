import React,{ useState, useEffect, useContext } from 'react';
import Ticket from '../../components/Ticket';
import { SearchContext } from '../../context/SearchContext';
//  import Navbar from '../../components/common/Navbar';
// import { message } from 'antd';



const Home = () => {
    const {bar}=useContext(SearchContext)
  const [result,setResult]=useState([]);
  const[cart,setCart]=useState([]);

  const addtocart=(item)=>{setCart([...cart,item]);

  }
  
  useEffect(()=>{
    fetch('https://backend-crud-one.vercel.app/product')
    .then(response=>response.json())
    .then(data=>setResult(data))
    .catch(error=>console.error("error fetching data:",error));
  },[])  

const  filtered=result.filter(item=>item.name?.toLowerCase().includes(bar.toLowerCase()))
  return (
    <>
      <div className='container-fluid p-3' >
        
        {/* { <Navbar setSearch={setSearch} 
        search={search}
        cartcount={cart.length}
        />  } */}
        </div>
        <div className='container-fluid' >
       <div className='row'>
        {filtered.map((item,index)=>(
          <div className='col-lg-4 mt-3' key={index}>
            <Ticket
            img={item.image}
            name={item.name}
            title={item.title}
            dname={item.director}
            ticket={item.ticketprice}
            date={item.releasedate}
            onAddclick={()=>addtocart(item)}
            id={item._id}
            />
          </div>
        ))}
       </div>
        
        </div>
      </>
      )
}

export default Home;
