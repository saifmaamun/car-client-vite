import React from 'react';

const CarouselItem = ({slide}) => {

    const {image,prev,id,next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
        <img src={image} className="w-full rounded-xl" />

            </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
        {/* hero title */}
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4 ">
          <h1 className="font-bold text-7xl text-start text-white">
            Affordable <br />
            Price For Car <br /> Servicing
          </h1>
        </div>
        {/* hero subtitle */}
        <div className="w-1/2 absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 ">
          <p className="text-xl text-start text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
        </div>
        {/* hero button */}
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/3 ">
          <button className="btn btn-active btn-secondary mr-5">Button</button>
          <button className="btn btn-outline btn-secondary">Button</button>
        </div>
      </div>
    );
};

export default CarouselItem;



