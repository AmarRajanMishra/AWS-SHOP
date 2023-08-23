import React from 'react';

import Sidebar from '../../components/user/Sidebar';
import UserProfile from '../../components/user/UserProfile';
import UserOrders from '../../components/user/UserOrder';


function UserDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
        <UserProfile/>
        <UserOrders/>
      </div>
    </div>
  );
}

export default UserDashboard;
