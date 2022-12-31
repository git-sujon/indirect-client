import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow,Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Testimonials = () => {
  const customers = [
    {
      name: "William Corkill",
      photo:
        "https://www.michiganfoundations.org/system/files/styles/cmf_contact_headshot_tablet_324_x_324_/private/headshots/William%20Corkill%202022%20WebHeadshot.png?itok=mVk_lzae",
      testimonial:
        "I had a great experience working with the team at this website. They were very helpful and made the process of buying a new home stress-free.",
      rating: 5,
      category: "Buyer",
      location: "Gulshan",
    },
    {
      name: "Jane Smith",
      photo:
        "https://images.vogue.it/users/my/avatar/kseniyanovikova.png?v=1620852822",
      testimonial:
        "The team at this website was amazing. They went above and beyond to help me find my dream home. I would highly recommend them.",
      rating: 3,
      category: "Buyer",
      location: "Uttara",
    },
    {
      name: "Bob Johnson",
      photo: "https://namedibs.com/img/home/male-profiles/Man-2.png",
      testimonial:
        "I was very impressed with the level of service I received from this website. They made the process of selling my home quick and easy.",
      rating: 4,
      category: "Seller",
      location: "Mirpur 1 ",
    },
    {
      name: "Sarah Williams",
      photo:
        "https://at-cdn-s01.audiotool.com/2011/09/23/documents/lwpFisnnHcqsf7DUrjtOU8gc7p9UP/0/cover256x256-827a38abfdec482290a49206b33296b4.jpg",
      testimonial:
        "The team at this website was incredibly helpful and professional. They made the process of finding my first home a breeze.",
      rating: 5,
      category: "Buyer",
      location: "Agargaon",
    },
    {
      name: "Adam Alex",
      photo:
        "https://img.freepik.com/premium-photo/adult-people-face-smile-expression-studio-portrait_53876-45363.jpg",
      testimonial:
        "I was very impressed with the level of service I received from this website. They made the process of selling my home quick and easy.",
      rating: 4,
      category: "Seller",
      location: "Baridhara",
    },
    {
      name: "Shera Jeen",
      photo:
        "https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?b=1&s=170667a&w=0&k=20&c=PNz3dsppr_Q0s_dNI_LaZdoY0oQtH812tvwZ13n-ods=",
      testimonial:
        "The team at this website was incredibly helpful and professional. They made the process of finding my first home a breeze.",
      rating: 3,
      category: "Buyer",
      location: "Dhanmondi",
    },
    {
      name: "Lenna Meyer",
      photo:
        "https://preview.redd.it/zupdi7nr4sd91.jpg?width=640&crop=smart&auto=webp&s=0c2f007e3eaafd29925a4c5caf738701fe3cc86f",
      testimonial:
        "The team at this website was amazing. They went above and beyond to help me find my dream home. I would highly recommend them.",
      rating: 5,
      category: "Buyer",
      location: "Samoli",
    },
  ];

  return (
    <div className="my-32 ">
      <div className="container mx-auto px-4">
        <div class="mx-auto max-w-xl text-center">
          <h2 className="text-center text-4xl font-semibold  mb-32 text-gray-700">
            Reviews from our Users
          </h2>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <Swiper
              effect={"coverflow"}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              mousewheel={true}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 4,
            
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow, Mousewheel]}
        
        >
          {customers.map((customer) => (
            <SwiperSlide>
              <div
                key={customer.name}
                className=" flex  flex-col justify-between border-2 border-gray-100 rounded-lg p-12 text-center shadow-xl hover:scale-105 transition duration-300"
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1146367620/vector/abstract-white-background.jpg?s=612x612&w=0&k=20&c=v6spf6OW1BS6KaM4Lz3BEfYK8_o5hUHF_4NvcpBpn6w=)`,
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <img
                    className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                    src={customer.photo}
                    alt={customer.name}
                  />
                  <p className="text-lg font-bold text-gray-700">
                    {customer.name}
                  </p>
                  <p class="mt-1 text-xs font-medium text-gray-500 flex justify-center items-center my-2">
                    <MapPinIcon className="w-4 h-4 fill-current text-gray-500"></MapPinIcon>{" "}
                    {customer.location} / {customer.category}
                  </p>
                  <div className="flex items-center justify-center mb-4 gap-1">
                    {[...Array(customer.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{customer.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
