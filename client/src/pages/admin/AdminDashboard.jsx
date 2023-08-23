import React from 'react';
import Sidebar from '../../components/admin/Sidebard';
import MainContent from '../../components/admin/MainContent';


function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default AdminDashboard;
