import React from 'react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <nav className="flex justify-between items-center bg-gray-100 p-4 shadow">
        <div className="flex space-x-6 items-center">
          <div className="text-2xl font-bold"><i className="fas fa-home"></i> HOME</div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-file-invoice-dollar"></i><span>EXPENSE</span>
          </div>
          <div>COMMITTEE</div>
          <div>ABOUT</div>
        </div>
        <div className="flex space-x-4 items-center">
          <input type="text" placeholder="Search..." className="px-3 py-1 rounded-full border" />
          <i className="fas fa-bars text-2xl"></i>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto mt-10 bg-cyan-950 text-white rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-8">+add Grocery Items</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Item Name</label>
              <input type="text" className="w-full p-2 rounded-md text-black" placeholder="Enter item name" />
            </div>
            <div>
              <label className="block mb-2">Date</label>
              <input type="date" className="w-full p-2 rounded-md text-black" />
            </div>
          </div>

          <div>
            <label className="block mb-2">Quantity</label>
            <input type="number" className="w-full p-2 rounded-md text-black" placeholder="Enter quantity" />
          </div>

          <div>
            <label className="block mb-2">Price</label>
            <input type="number" className="w-full p-2 rounded-md text-black" placeholder="Enter price" />
          </div>

          <div className="flex justify-between pt-4">
            <button type="reset" className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-semibold">
              Reset
            </button>
            <button type="submit" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white font-semibold">
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
