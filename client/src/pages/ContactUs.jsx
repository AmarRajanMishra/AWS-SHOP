import React from 'react'

function ContactUs() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have questions or feedback? Reach out to us using the information below or fill out the contact form.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> info@example.com
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Phone:</span> +1 123-456-7890
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Address:</span> 123 Main St, City, Country
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs