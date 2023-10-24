import React from "react";
import cIcon from "../../assets/cIcon.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-white py-8 my-8 mb-4">
        <div className="flex w-[90%] mx-auto justify-between flex-col md:flex-row">
          <div>
            <p className="text-sm font-semibold mb-5">Contact</p>

            <p className="text-sm mb-2">zzzzap@gamil.com</p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-5">Company</p>
            <p className="text-sm mb-2">About company</p>
            <p className="text-sm mb-2">Services</p>
            <p className="text-sm mb-2">Privacy Policy</p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-5">Information</p>

            <p className="text-sm mb-2">Questions and answers</p>
            <p className="text-sm mb-2">Site terms of use</p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-5">For Clients</p>

            <p className="text-sm mb-2">Shipping and Payment</p>
            <p className="text-sm mb-2">Return Policy</p>
            <p className="text-sm mb-2">Guarantee</p>
            <p className="text-sm mb-2">Methods of making monthly payments</p>
            <p className="text-sm mb-2">corporate Sales</p>
          </div>
        </div>
      </footer>

      <div className="mb-2">
        <div className="flex justify-center items-center">
          <div className="w-5 h-5 mr-1">
            <img src={cIcon} alt="cIcon" className="w-full h-full" />
          </div>
          <p className="text-xs">ZzzzAP Home 2023</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
