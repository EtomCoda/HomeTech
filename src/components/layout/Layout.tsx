import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../common/ChatWidget';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;