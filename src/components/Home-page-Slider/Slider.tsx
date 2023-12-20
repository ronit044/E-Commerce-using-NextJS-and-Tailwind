// Import necessary modules
"use client"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import imgs from '../ui/Home-page-slider-ui';
import Link from 'next/link';

type sliderTypeUI = {
  Alt: string,
  ImgLink: string
  ItemPointerLink: string
}

const ImageSlider = () => {
  return (
    <div className='relative overflow-hidden'>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
        transitionTime={2000}
        showThumbs={false}
        className='w-full'
      >
        {imgs.map((ele: sliderTypeUI) => (
          <Link key={ele.ImgLink} href={ele.ItemPointerLink}>
            <div className='h-72 sm:h-96 md:h-96 lg:h-96 xl:h-96'>
              <Image
                src={ele.ImgLink}
                alt={ele.Alt}
                layout='fill'
                objectPosition='center center'
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
