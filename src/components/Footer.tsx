import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-28">
      <div className="px-5 py-3 border-b border-gray-300 text-sm">
        India
      </div>
      <div className="flex justify-between px-5 py-3 text-sm">
        <ul className="flex gap-3">
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search Works</li>
        </ul>

        <ul className="flex gap-3">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
