import React, { useEffect } from 'react';

export default function NavBar(){
    useEffect(() => {
        const handleScroll = () => {
          var navbar = document.getElementById('navBar'); // Replace 'your-navbar-id' with the actual ID of your navbar
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
          if (scrollTop <= 45) {
            setTimeout(() => {
                navbar.classList.remove('scrolled'); // Replace 'scrolled' with the CSS class to be removed when scrolling to the top
            }, 200)
          } else {
            setTimeout(() => {
            navbar.classList.add('scrolled'); // Replace 'scrolled' with the CSS class to be added when scrolling down
            }, 200);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
    <div className="w-100 top-nav-bg" id="navBar">
        <section className="top-nav container mx-auto">
            <div>
                <img src='/images/logo.png' className="brand-logo" />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#about">Home</a></li>
                <li><a href="#team">About</a></li>
                <li><a href="#team">Privacy Policy</a></li>
                <li><a href="#team">Downloads</a></li>
                <li><a href="#team" className='btn-sm primary-btn font-xs'>Contact Us</a></li>
                {/* <li><a  href="https://polygonscan.com/token/0x89b1416193AC3942BA585E5B86843f3AC43e5E4b" target='_blank'>Digicash in Blockchain</a></li> */}
            </ul>
        </section>
    </div>
    )
}