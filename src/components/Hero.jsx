import React from 'react';
import styles from '../style';
import { Carousel } from 'antd';
import { banner } from '../assets';

const Hero = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

        <div className={`flex-1 flex justify-center flex-col xl:px-0 sm:px-16 px-6 `}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins text-center font-semibold ss:text-[62px] text-[52px] text-gradient ss:leading-[100px] leading-[75px] " id='text-gradient'>
              Ən keyfiyyətli döşəklər üçün bir pəncərəniz olan HAKSANA xoş gəlmisiniz.
            </h1>
          </div>
          <Carousel className='m-0 h-full' afterChange={onChange}>
            <img src={banner} />
          </Carousel>
          <p className={`${styles.paragraph} text-center mt-5`}>
            Məqsədimiz sizə hər səhər təravətli və cavan oyanmağınıza kömək edəcək mükəmməl yuxu həllini təqdim etməkdir. Biz başa düşürük ki, düzgün döşəyi seçmək zəhmətkeş bir iş ola bilər, ona görə də bu prosesdə sizə rəhbərlik etmək üçün buradayıq.
          </p>
          <div className='w-[100%] h-[100%] ccsf' />
        </div>
      </section>

    </>
  )
}

export default Hero