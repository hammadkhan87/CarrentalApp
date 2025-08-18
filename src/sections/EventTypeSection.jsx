import { ArrowRight } from 'lucide-react'
import React from 'react'
import { carUsageCategories } from '../assets/assets'
import CarCard from '../components/CarCard'

const EventTypeSection = () => {
  return (
    <section className='section-padding bg-black'>
    <div className='max-w-7xl mx-auto mb-24'>
        <div className="mb-20 flex justify-between items-end">
            <div>
                <h2 className='heading-2 clash-display grad1 from-zinc-50 max-w-2xl'>Perfect Ride for Every Occasion</h2>
                <p className='text-zinc-400 max-w-md'>
                   Find the ideal car for your business needs, family adventures, or special moments
                </p>
            </div>
            <button className='hidden md:hidden bg-blue-300 text-zinc-800 py-3 px-5 rounded-full cursor-pointer 
            hover:bg-transparent border border-transparent hover:border-zinc-100 transition-all duration-200 ease-out
            hover:text-zinc-200 clash-display h-fit lg:centered-row gap-2'> See All <ArrowRight className='w-8 text-sm'/> </button>
        </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {/* Car card */}
            {
                carUsageCategories.map((event,index)=>(
                    <CarCard key={index} {...event}/>
                ))
            }
          </div>
    </div>
    </section>
  )
}

export default EventTypeSection