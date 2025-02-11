import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";


const items = [
  "/images/img-5.webp",
  "/images/img-3.webp",
  "/images/img-2.webp",
  "/images/img-4.webp",
  "/images/img-1.webp",
];

export default function Certificate() {
  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-semibold mb-6 text-white">
        Certificates
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <div
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ minHeight: "200px" }}
              >
                <img
                  src={item}
                  alt={`certificate-${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
