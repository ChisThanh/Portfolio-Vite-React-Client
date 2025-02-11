import "swiper/swiper-bundle.css";
import { slides } from "../stores/data/index";
import { useTypewriter } from "../hooks/useTypewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';

const CarouselHome = () => {
  const textArray = [
    "Hello, There! 👋",
    "This is Chis Thanh.",
    "I'm Backend Developer.",
    "Nice to meet you!",
  ];

  const typedText = useTypewriter(textArray, {
    typingSpeed: 100,
    pauseTime: 1000,
    repetitions: -1,
  });

  return (
    <div>
      <div className="flex justify-center items-center drop-shadow-lg mb-7">
        <div className="block max-w-sm p-3 bg-indigo-50 border  rounded-lg shadow hover:bg-gray-100 ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 flex justify-center items-center min-w-[10rem] min-h-10 text-center sm:text-lg md:text-xl lg:text-2xl">
            {typedText}
          </h5>
        </div>
      </div>

      <div className="w-full relative">
        <div className="swiper centered-slide-carousel swiper-container relative">
          <div className="swiper-wrapper w-screen">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                "@1.75": {
                  slidesPerView: 8,
                  spaceBetween: 30,
                },
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div  className="swiper-slide">
                    <div className="bg-indigo-50 rounded-xl h-[10rem] flex justify-center items-center">
                      <img
                        src={slide.image}
                        className="w-20 h-20 object-contain mb-4"
                        alt={slide.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHome;
