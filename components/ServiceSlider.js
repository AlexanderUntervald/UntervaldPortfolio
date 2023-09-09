// import swiper react components

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Manager',
    description: 'Work as a manager, creation of various startups.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Media Buyer',
    description: 'Work as a media buyer. Experience in all verticals. Arbitration TTUBT / TTADC, FB, Insta. works with Keitaro, ZTDs. Experience with anti-detect(dolphin);' ,
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'creation of websites, various landings and creatives. The main task is to leave the client satisfied.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Сopywriting work. Writing articles on affiliate marketing. Work on various projects on courses.',
  },
  {
    icon: <RxRocket />,
    title: 'Communication',
    description: 'Extensive work experience in the field of communication. Ability to negotiate at all stages. Extensive work experience in the field of conversational strategies.',
},
];



const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[390px] sm:h-[520px]'
    >

      {
       serviceData.map((item, index)=> {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4 '>{item.icon}</div>
             {/* title & descr */}
             <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
             </div>
             {/* arrow */}
             <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:text-acent transition-all duration-300'/>
             </div>
            </div>
          </SwiperSlide>
        )
      })} 
    </Swiper>
  )
};

export default ServiceSlider;
