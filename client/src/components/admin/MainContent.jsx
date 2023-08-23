import React from 'react';

function MainContent() {
  return (
    <main className="w-3/4 p-4 mt-8 mb-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Welcome to the Admin Dashboard</h2>
        <p className="text-gray-600">
          This is your control center for managing your e-commerce platform. You can view
          sales data, manage orders, update product information, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Sample Card 1 */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Sales</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec facilisis tortor.
          </p>
        </div>
        
        {/* Sample Card 2 */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">New Orders</h2>
          <p className="text-gray-600">
            Sed tempor elit at nunc congue, ut vestibulum purus euismod. Vivamus non laoreet ligula.
          </p>
        </div>
      </div>

      {/* Sample Chart */}
      <div className="bg-white shadow-md p-6 rounded-lg mt-4">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
        {/* Integrate a chart using Chart.js or Recharts */}
        {/* <ChartComponent /> */}
      </div>
      
    </main>
  );
}

export default MainContent;
