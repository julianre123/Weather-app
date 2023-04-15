import React from 'react'

const Forecast = (props) => {
  return (
    <div>
        <div className="flex items-center justify-center mt-6">
            <p className='text-white font-medium uppercase'>
                {props.title}
            </p>
            
        </div>
        <hr className='my-2'/>
        <div className="flex flex-row items-center justify-between text-white">

            <div className="flex flex-col items-center justify-center">
                <p className='font-light text-sm'>
                    2:45 PM
                </p>
                <img src="" className='w12 my-1' alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-light text-sm'>
                    2:45 PM
                </p>
                <img src="" className='w12 my-1' alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-light text-sm'>
                    2:45 PM
                </p>
                <img src="" className='w12 my-1' alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-light text-sm'>
                    2:45 PM
                </p>
                <img src="" className='w12 my-1' alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-light text-sm'>
                    2:45 PM
                </p>
                <img src="" className='w12 my-1' alt="" />
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast