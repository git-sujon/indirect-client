import React from 'react';

const Testimonials = () => {
    const customers = [
        {
          name: 'John Doe',
          photo: '/images/customer-1.jpg',
          testimonial: 'I had a great experience working with the team at this website when I was buying my first home. They were very helpful and made the process stress-free.',
          category: 'Buying a House'
        },
        {
          name: 'Jane Smith',
          photo: '/images/customer-2.jpg',
          testimonial: 'The team at this website was amazing when I was selling my home. They went above and beyond to help me get the best price possible. I would highly recommend them to anyone looking to buy or sell a property.',
          category: 'Selling a House'
        },
        {
          name: 'Bob Johnson',
          photo: '/images/customer-3.jpg',
          testimonial: 'I was very impressed with the level of service I received from this website when I was selling my home. They made the process quick and easy, and I was able to get my asking price.',
          category: 'Selling a House'
        },
        {
          name: 'Sarah Williams',
          photo: '/images/customer-4.jpg',
          testimonial: 'The team at this website was incredibly helpful and professional when I was buying my first home. They made the process of finding the perfect house a breeze.',
          category: 'Buying a House'
        },
      ];
      

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">What Our Customers Are Saying</h2>
        <div className="flex flex-wrap -mx-4">
          {customers.map(customer => (
            <div className="w-full md:w-1/2 px-4 mb-8" key={customer.name}>
              <div className="bg-white rounded shadow-md py-6 px-8 flex items-center">
                <img src={customer.photo} alt={customer.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="mb-4 text-gray-700">{customer.testimonial}</p>
                  <p className="text-gray-600 text-xs">- {customer.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
