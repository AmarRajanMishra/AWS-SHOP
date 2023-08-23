import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-1/4 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/orders" className="text-white hover:text-gray-300">
              Orders
            </Link>
          </li>
          {/* Add more sidebar links */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
