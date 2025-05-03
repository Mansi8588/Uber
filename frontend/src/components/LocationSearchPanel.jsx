import React from 'react'

const LocationSearchPanel = (props)=>{
 

    const locations=[
        "xsxo lrg nohrig nfrg kfrg miohrb bgr59",
        "xsxo lrg nohrig nfrg kfrg miohrb bgr59",

        "xsxo lrg nohrig nfrg kfrg miohrb bgr59",

        "xsxo lrg nohrig nfrg kfrg miohrb bgr59",
        "xsxo lrg nohrig nfrg kfrg miohrb bgr59",

    ]

    return (
        <div>
            {/* Display fetched suggestions */}
            {
                locations.map(function(elem,idx){ 
                  return   <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                  }}
                    className='flex gap-4 border-2 p-3  border-gray-50 active:border-pink-500 rounded-xl items-center my-2 justify-start'>
                       <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                       <h4 className='font-medium'>
                            {elem}
                            
                           </h4>
                   </div>
                }) 
                           }
                   
                
            
        </div>
    )
}

export default LocationSearchPanel