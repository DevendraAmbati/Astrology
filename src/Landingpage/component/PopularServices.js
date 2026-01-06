import React from 'react'
import { button } from 'react-bootstrap'

const PopularServices = () => {
  return (
    <div className='container'>
        <h3 className='text-center'>Popular Services</h3>
        <div className='row  d-flex flex-wrap justify-content-center' >
            <div className='d-flex flex-wrap justify-content-center  ' >
            <div className=' col-lg-3 col-md-3 p-2   d-flex  justify-content-center'  ><button className='bg-info  p-3' style={{width:"100%", border:"none", borderRadius:"10px"}} >Love</button> </div>
            <div className=' col-lg-3 col-md-3 p-2 d-flex  justify-content-center'><button className='p-3'  style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"#f30372b0"}}>Marriage</button> </div>
            <div className=' col-lg-3 col-md-3 p-2  d-flex  justify-content-center'><button className='p-3' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(133 3 243 / 55%)"}}>Black Magic</button> </div>
            <div className=' col-lg-3 col-md-3 p-2 d-flex  justify-content-center'><button className='p-3' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(3 243 223 / 58%)"}}>Vashikaran</button> </div>
            </div>
        </div>
        <div className='row  d-flex flex-wrap justify-content-center' >
            <div className='d-flex flex-wrap justify-content-center ' >
        
            <div className=' col-lg-4 col-md-4 p-2 d-flex  justify-content-center'><button className='p-3' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(161 228 126 / 84%)"}}>Kundali Match</button> </div>
            <div className=' col-lg-4 col-md-4 p-2 d-flex  justify-content-center'><button className='p-3' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(243 171 3 / 69%)"}}>Horoscope</button> </div>
            <div className=' col-lg-4 col-md-4 p-2 d-flex  justify-content-center'><button className='p-3' style={{width:"100%", border:"none", borderRadius:"10px",backgroundColor:"rgb(79 3 243 / 55%)"}}>Online Astrologer</button> </div>
            </div>
        </div>
      
    </div>
  )
}

export default PopularServices
