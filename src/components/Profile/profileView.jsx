// import React from 'react'

const ProfileView = () => {
  return (
    <>
      <div className="bg-white p-3 rounded-lg">
        <p className="font-medium text-lg pu-2">My Account</p>
      </div>

      <div className="bg-white p-3 rounded-lg mt-2">
        <p className="text-center text-xs font-medium mb-4">Personal information</p>

        <div className="border-b-2 border-black">
          <div className="flex justify-between items-center px-2">
            <p className="text-sm font-medium">Name</p>
            <p className="w-4/5 text-sm font-medium text-gray-500">Kunal</p>
          </div>
        </div>
        <div className="border-b-2 border-black mt-3">
          <div className="flex justify-between items-center px-2">
            <p className="text-sm font-medium">Surname</p>
            <p className="w-4/5 text-sm font-medium text-gray-500">Kishore</p>
          </div>
        </div>
        <div className="border-b-2 border-black mt-3">
          <div className="flex justify-between items-center px-2">
            <p className="text-sm font-medium">Mob. No.</p>
            <p className="w-4/5 text-sm font-medium text-gray-500">+91987645321</p>
          </div>
        </div>

        <div className="border-b-2 border-black mt-3">
          <div className="flex justify-between items-center px-2">
            <p className="text-sm font-medium">Email</p>
            <p className="w-4/5 text-sm font-medium text-gray-500">kunalkishore123@gmail.com</p>
          </div>
        </div>


        <p className="text-center text-xs font-medium mb-4 mt-4">Delivery address</p>


      </div>
    </>
  );
};

export default ProfileView;
