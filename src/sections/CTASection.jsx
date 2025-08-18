import React from 'react'
import BookNowButton from '../components/BookNowButton'
import { togglerBtns } from '../assets/assets'

const CTASection = () => {
  return (<>   
   <div className='w-full h-[200px] bg-zinc-950 flex overflow-x-scroll lg:overflow-clip snap-x snap-mandatory'>
{
    togglerBtns.map((item,index)=>(
        <div key={index} className="">

        </div>
    ))
}
    </div>
    <section className=''>
        <div className=''>
            <div className="">    </div>
            <div className=""></div>
            <div className=""></div>
        </div>
        <div className="">
            <div>
                <h2 className=''>View Closely Your Perfect Ride in 3D.</h2>
                <p className=''>Browes our extensive fleet in 3D, book with ease, and embark on your next unforgettable journey</p>
                <BookNowButton type={2}/>
            </div>
            <div className="">
                <div className="">
                    <p className="">50%</p>
                    <p className="">For everyone Brand cars</p>
                </div>
            </div>
        </div>
    </section>
  </>
)
}

export default CTASection