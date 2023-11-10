import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral p-1 text-neutral-content">
      <div className="footer m-auto pl-5 flex max-w-7xl pt-5">
        <div>
          <span className="footer-title">Services</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link-hover link">About us</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Jobs</a>
          <a className="link-hover link">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <div className="p-3 text-xs text-white">
          Country | Currency | Language
        </div>
        <div className="text-sm text-slate-200">@2023 TaoTao Shop</div>
      </div>
    </footer>
  );
};

export default Footer;
