import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Testimonials = () => {
  const customers = [
    {
      name: "William Corkill",
      photo:
        "https://www.michiganfoundations.org/system/files/styles/cmf_contact_headshot_tablet_324_x_324_/private/headshots/William%20Corkill%202022%20WebHeadshot.png?itok=mVk_lzae",
      testimonial:
        "I had a great experience working with the team at this website. They were very helpful and made the process of buying a new home stress-free.",
      rating: 5,
      category:"Buyer",
      location: "Gulshan"
    },
    {
      name: "Jane Smith",
      photo:
        "https://images.vogue.it/users/my/avatar/kseniyanovikova.png?v=1620852822",
      testimonial:
        "The team at this website was amazing. They went above and beyond to help me find my dream home. I would highly recommend them.",
      rating: 4,
      category:"Buyer",
      location: "Uttara"
    },
    {
      name: "Bob Johnson",
      photo: "https://namedibs.com/img/home/male-profiles/Man-2.png",
      testimonial:
        "I was very impressed with the level of service I received from this website. They made the process of selling my home quick and easy.",
      rating: 5,
      category:"Seller",
      location: "Mirpur 1 "
    },
    {
      name: "Sarah Williams",
      photo:
        "https://at-cdn-s01.audiotool.com/2011/09/23/documents/lwpFisnnHcqsf7DUrjtOU8gc7p9UP/0/cover256x256-827a38abfdec482290a49206b33296b4.jpg",
      testimonial:
        "The team at this website was incredibly helpful and professional. They made the process of finding my first home a breeze.",
      rating: 4,
      category:"Buyer",
      location: "Agargaon"
    },
  ];

  return (
    <div className="my-20" >
      <div className="container mx-auto px-4">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-4xl font-bold tracking-tight sm:text-5xl pb-10 text-gray-700">
            Read trusted reviews from our Users
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className=" flex  flex-col justify-between rounded-lg p-12 text-center shadow-xl lg hover:scale-105 transition duration-300"
              style={{ backgroundImage: `url(https://media.istockphoto.com/id/1146367620/vector/abstract-white-background.jpg?s=612x612&w=0&k=20&c=v6spf6OW1BS6KaM4Lz3BEfYK8_o5hUHF_4NvcpBpn6w=)`, backgroundSize: 'cover'  }}
            >
              <div>
              <img
                className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                src={customer.photo}
                alt={customer.name}
              />
              <p className="text-lg font-bold text-gray-700">{customer.name}</p>
              <p class="mt-1 text-xs font-medium text-gray-500 flex justify-center items-center my-2">
               <MapPinIcon className="w-4 h-4 fill-current text-gray-500"></MapPinIcon> {customer.location} / {customer.category}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
