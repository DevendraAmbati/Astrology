import React from 'react'
import { button } from 'react-bootstrap'

const PopularServices = () => {
  return (
    <div className='container'>
        <h3 className='text-center'>Our Branch's</h3>
        <div className='row  d-flex flex-wrap justify-content-center' >
            <div className='d-flex flex-wrap justify-content-center ' >
        
            <div className=' col-lg-4 col-md-4 p-2 d-flex  justify-content-center '><button className='p-3 text-white' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(255 0 80 / 80%)"}}> Banashankari 3rd stage </button> </div>
            <div className=' col-lg-4 col-md-4 p-2 d-flex  justify-content-center'><button className='p-3  text-white' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"#3858e9"}}>Jayanagar 3rd block</button> </div>
            <div className=' col-lg-4 col-md-4 p-2 d-flex  justify-content-center'><button className='p-3  text-white' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(208 3 3 / 61%)"}}>Whitefield</button> </div>
            </div>
        </div>
      
    </div>
  )
}

export default PopularServices
