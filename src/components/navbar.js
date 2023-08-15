import React from 'react';
import './navbar.css';

const Navbar = () => {
  return(
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{background:'rgb(12, 23, 47)', padding:'-15px -10px 5px 10px' , height:'60px'}} >
    <a className="navbar-brand" href="#" style={{color:'white'}}>
      <span>Paytm<br></br>
      Insider</span>
    </a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" style={{padding:'20px' }}>
        <a className='buttons'  href="#" style={{ float: 'right'}} >
          Populer Event
        </a>
        <a className="buttons" href="#" style={{color:'white' , fontWeight:'700'}}>
          Free Event
        </a>
        <a className="buttons" href="#" style={{color:'white' , fontWeight:'700'}}>
          Today's Event
        </a>
        
        <div className='buttons' style={{ marginLeft:'600px'}}>
        List Your Event
        </div>
        <div className='buttons' style={{ float: 'right'}}>
          We are hiring
        </div>
        <div style={{ float: 'right'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='search'><path fill-rule="evenodd" clip-rule="evenodd" d="M15.438 16.1451C14.1188 17.3001 12.3911 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.3911 17.3001 14.1188 16.1451 15.438L20.8536 20.1464C21.0488 20.3417 21.0488 20.6583 20.8536 20.8536C20.6583 21.0488 20.3417 21.0488 20.1464 20.8536L15.438 16.1451ZM17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5Z" fill="white"></path></svg>
        </div>
        <div className='buttons' style={{ float: 'right'}}>
          Online
        </div>
        <div className='buttons'> 
        <svg  width="25" height="25" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.26464 4.801C6.26464 3.20871 7.55544 1.91791 9.14772 1.91791C10.74 1.91791 12.0308 3.20872 12.0308 4.801C12.0308 6.39329 10.74 7.68409 9.14772 7.68409C7.55544 7.68409 6.26464 6.39329 6.26464 4.801ZM9.14772 0.5C6.77234 0.5 4.84673 2.42563 4.84673 4.801C4.84673 7.17637 6.77234 9.102 9.14772 9.102C11.5231 9.102 13.4487 7.17638 13.4487 4.801C13.4487 2.42562 11.5231 0.5 9.14772 0.5ZM2.10541 16.3333C2.10541 13.7077 4.33249 11.4652 7.0681 11.4652H11.3218C14.0653 11.4652 16.2845 13.6209 16.2845 16.3333V17.1405C16.2089 17.6863 15.7974 18.0821 15.292 18.0821H3.00342C2.51666 18.0821 2.10541 17.7108 2.10541 17.1841V16.3333ZM7.0681 10.0473C3.5649 10.0473 0.6875 12.9092 0.6875 16.3333V17.1841C0.6875 18.5479 1.78868 19.5 3.00342 19.5H15.292C16.6665 19.5 17.5717 18.4003 17.6981 17.2624C17.701 17.2364 17.7024 17.2102 17.7024 17.1841V16.3333C17.7024 12.8069 14.8172 10.0473 11.3218 10.0473H7.0681Z" fill="white"></path></svg>
      </div>
      </div>
    </div>
  </div>
    </nav>
   
   </div>
   

    




  );
}

export default Navbar;

