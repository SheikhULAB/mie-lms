import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="bg-red-600 shadow-md">
    <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
      <a href="/" className="text-xl font-bold text-white">
        <img src="/images/logo.png" alt="MIE LMS" className="inline-block w-16 h-16" />
      </a>
      <h1 className="text-lg font-semibold text-white">{title}</h1>
    </div>
  </header>
);

export default Header;
