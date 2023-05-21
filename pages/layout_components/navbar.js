export default function NavBar(){
    return (
    <div className="w-100 top-nav-bg">
        <section className="top-nav container mx-auto">
            <div>
                <img src='/images/logo.png' className="brand-logo" />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' for="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#about">Home</a></li>
                <li><a href="#team">About</a></li>
                <li><a href="#team">Services</a></li>
                <li><a href="#team">Case Study</a></li>
                <li><a href="#team">News</a></li>
                {/* <li><a  href="https://polygonscan.com/token/0x89b1416193AC3942BA585E5B86843f3AC43e5E4b" target='_blank'>Digicash in Blockchain</a></li> */}
            </ul>
        </section>
    </div>
    )
}