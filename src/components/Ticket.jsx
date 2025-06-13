import React from 'react'
import Card from 'antd/es/card/Card'
import  Button from 'antd/es/button'
import { Link } from 'react-router-dom'

const Ticket = (props) => {
  return (
    <>
  <Card
    hoverable
    style={{  width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    backgroundColor:'white'
    }}
    cover={<img alt="ticket booking" className='zoom-img' src={props.img} style={{height:400,objectFit:'cover'}} />}
  >
      {/* <Meta title={props.title} description="www.instagram.com" /> */}
      <p><b>Name:</b>{props.name}</p>
    <p><b>Title:</b>{props.title}</p>
    <p><b>Director Name:</b>{props.dname}</p>
    <p> <span style={{fontSize:"25px"}}>💰</span><b>Ticket Price:</b>{props.ticket}</p>
    <p><span style={{fontSize:"25px"}}>🎬</span> <b>ReleaseDate:</b>{props.date}</p>
    
    <Link to={`/${props.id}`}>
        <Button className=' ms-5 ps-5 pe-5 d-flex justify-content-center align-items-center'>Book Now<span><i className="fa-solid fa-cart-shopping ms-3"></i></span></Button>
    </Link>

   
  </Card>
    </>
  )
}

export default Ticket
