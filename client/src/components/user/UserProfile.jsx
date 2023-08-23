import React from 'react';

function UserProfile() {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">User Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="user-profile-image.jpg" // Replace with the actual image URL
            alt="User Profile"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
        <div>
          <p className="text-gray-600">Full Name: John Doe</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
          <p className="text-gray-600">Phone: +1 123-456-7890</p>
          <p className="text-gray-600">Address: 123 Main St, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
