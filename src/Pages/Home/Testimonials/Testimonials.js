import React from 'react';

const Testimonials = () => {
  const customers = [
    {
      name: 'John Doe',
      photo: '/images/customer-1.jpg',
      testimonial: 'I had a great experience working with the team at this website. They were very helpful and made the process of buying a new home stress-free.'
    },
    {
      name: 'Jane Smith',
      photo: '/images/customer-2.jpg',
      testimonial: 'The team at this website was amazing. They went above and beyond to help me find my dream home. I would highly recommend them to anyone looking to buy or sell a property.'
    },
    {
      name: 'Bob Johnson',
      photo: '/images/customer-3.jpg',
      testimonial: 'I was very impressed with the level of service I received from this website. They made the process of selling my home quick and easy.'
    },
    {
      name: 'Sarah Williams',
      photo: '/images/customer-4.jpg',
      testimonial: 'The team at this website was incredibly helpful and professional. They made the process of finding my first home a breeze.'
    },
  ];

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customers.map(customer => (
            <div key={customer.name} className="p-4 bg-white shadow-lg rounded-lg">
              <img className="w-16 h-16 rounded-full mx-auto mb-4" src={customer.photo} alt={customer.name} />
              <p className="text-gray-700 font-bold text-xl mb-2">{customer.name}</p>
              <p className="text-gray-600 mb-4">{customer.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
