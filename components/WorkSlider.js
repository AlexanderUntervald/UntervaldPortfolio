import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Slide 1',
          path: '/thumb1.png',
          link: 'https://lending-moto.vercel.app',
        },
        {
          title: 'Slide 2',
          path: '/thumb2.png',
          link: 'https://untervald-portfolio-lpcg.vercel.app',
        },
        {
          title: 'Slide 3',
          path: '/thumb3.png',
          link: 'https://website-book-amber.vercel.app',
        },
        {
          title: 'Slide 4',
          path: '/thumb4.png',
          link: 'https://github.com/AlexanderUntervald/Land-Fish',
        },
        
        // Додайте посилання для інших слайдів
      ],
    },
    {
      images: [
        {
          title: 'Slide 5',
          path: '/thumb5.png',
          link: 'https://github.com/AlexanderUntervald/Land-Cyber',
        },
        {
          title: 'Slide 6',
          path: '/thumb6.png',
          link: 'https://github.com/AlexanderUntervald/0-1-Furniture',
        },
        {
          title: 'Slide 7',
          path: '/thumb7.png',
          link: 'https://github.com/AlexanderUntervald/Land-Carshering',
        },
        {
          title: 'Slide 8',
          path: '/thumb8.jpg',
          link: 'https://github.com/AlexanderUntervald/WebC-FreePortfolio',
        },
        
        // Додайте посилання для інших слайдів
      ],
    },
    {
      images: [
        {
          title: 'Slide 9',
          path: '/thumb9.png',
          link: 'https://github.com/AlexanderUntervald/AffiliateMarketing-Prelending',
        },
        {
          title: 'Slide 10',
          path: '/thumb10.png',
          link: 'https://github.com/AlexanderUntervald/WebC-travel',
        },
        // {
        //   title: 'Slide 11',
        //   path: '/thumb11.png',
        //   link: 'https://github.com/AlexanderUntervald/Land-Moto',
        // },
        // {
        //   title: 'Slide 12',
        //   path: '/thumb12.png',
        //   link: 'https://github.com/AlexanderUntervald/Land-Moto',
        // },
        
        // Додайте посилання для інших слайдів
      ],
    },
    // Додайте дані для інших слайдів
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[400px] sm:h-[580px]'
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imageIndex) => (
              <div
                key={`image-${slideIndex}-${imageIndex}`}
                className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                style={{ cursor: 'pointer' }}
              >
                {/* Використовуйте Link для створення окремого посилання для кожного слайда */}
                <Link href={image.link}>
                  <div>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>{image.title}</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
      Servise Slider
    </Swiper>
  )
};

export default WorkSlider;
