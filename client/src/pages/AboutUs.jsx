import React from 'react';

function AboutUs() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-gray-600 mb-6">
        Welcome to our company. We are dedicated to providing high-quality products and excellent customer service.
      </p>
      
      <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
      <p className="text-gray-600 mb-6">
        Our mission is to deliver the best products that enrich our customers' lives while maintaining environmental sustainability.
      </p>
      
      <h2 className="text-xl font-semibold mb-3">Our Team</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img
            src="team-member1.jpg" // Replace with the actual image URL
            alt="Team Member 1"
            className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img
            src="team-member2.jpg" // Replace with the actual image URL
            alt="Team Member 2"
            className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Jane Smith</h3>
          <p className="text-gray-600">Head of Operations</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
