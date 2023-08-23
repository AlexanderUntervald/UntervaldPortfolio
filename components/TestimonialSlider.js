// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Alona Kaluzhina',
    position: 'Insurance broker',
    message:
      'Oleksander completed his work very quickly and efficiently. Glad to have found such an expert.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Artem Paramonov',
    position: 'Afilate Marketing',
    message:
      'Although the task was difficult and the conditions changed in the process, the work was 100% completed. Oleksandr is a great professional!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Alexander',
    position: 'Customer',
    message:
      'Recommended by a mutual friend. It was necessary to impose a gasket for the cloaca! Everything was done at the highest level!',
  },
];
 
 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

 
//icons
import { FaQuoteLeft } from 'react-icons/fa';

import Image from 'next/image'

const TestimonialSlider = () => {
  return (
    <Swiper
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className='h-[400px]'
    >

      {testimonialSlider.map((person, index)=> {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>

                  {/* name */}
                   <div className='text-lg'>{person.name}</div>

                  {/* position */}
                   <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position
                    }</div>
                </div>
              </div>
               {/*  quote / massage */}
               <div className='flex-1 flex-col justify-center before:w[-1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/*  quote icom */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
               </div>
                {/* massage */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                  </div>
                  </div>
            </div>
          </SwiperSlide>
        );
      })} 
    </Swiper>
  )
};

export default TestimonialSlider;
