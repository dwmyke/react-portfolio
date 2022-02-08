import React from 'react';
import Footer from './Footer';
import Header from './Header';
import AOS from 'aos';
AOS.init({
  duration:1000
});

function Layout({children}) {
  return (
  
  <div>
      <Header />

      <div className='content font-pop'>
          {children}
      </div>
<div data-aos='slide-up'>
      <Footer />
      </div>
  </div>
  );
}

export default Layout;
