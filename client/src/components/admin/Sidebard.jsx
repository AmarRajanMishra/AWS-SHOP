import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Sidebar() {
    const { id } = useParams()
  return (
    <aside className="w-1/4 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard/admin" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/orders" className="text-white hover:text-gray-300">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/product" className="text-white hover:text-gray-300">
              Products
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/admin/create-product" className="text-white hover:text-gray-300">
              Create Products
            </Link>
          </li>
          <li className="mb-4">
            <Link to={`/dashboard/admin/update-product/${id}`} className="text-white hover:text-gray-300">
              Update Products
            </Link>
          </li>
          {/* Add more sidebar links */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
