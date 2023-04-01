import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./styles.css";
import Panel from "./Panel";

const Carousel = () => {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/786220/pexels-photo-786220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Human Bag",
      price: 34,
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.x9fjmSreFgFKaUIZsd7shwHaE5&pid=Api&P=0",
      title: "Human tree Bag",
      price: 344,
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.U0_SqaehHlBoIrQAOkoyCgHaEo&pid=Api&P=0",
      title: "Human tree Bag",
      price: 344,
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.O07HmnWRY3QL0G9fsj4bBQHaF6&pid=Api&P=0",
      title: "Human tree Bag",
      price: 344,
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.j5t6bb2Atl6Fuig5ZpRWMAHaEq&pid=Api&P=0",
      title: "Human tree Bag",
      price: 344,
    },
    {
      image: "https://mcdn.wallpapersafari.com/medium/58/42/YNoPB6.jpg",
      title: "Human tree Bag",
      price: 344,
    },
  ];

  return (
    <Box className='box'>
      <Swiper
        // install Swiper modules
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: "true",
        }}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        slidesPerView={3}
        className='swiper_container'
      >
        {data.map((item, pos) => {
          return (
            <SwiperSlide key={pos}>
              <Panel image={item.image} title={item.title} price={item.price} />
            </SwiperSlide>
          );
        })}

        {/* <div className='slider-controller'>
        <div className='swiper-button-prev slider-arrow'>
          <h1>A</h1>
        </div>
        <div className='swiper-button-next slider-arrow'>
          <h1>B</h1>
        </div>
        <div className='swiper-pagination'></div>
      </div> */}
      </Swiper>
    </Box>
  );
};

export default Carousel;
