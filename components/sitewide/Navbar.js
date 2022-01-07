import contact_config from '../../contact.json';
import style_config from '../../styles/config.json';

import MenuLogo from '../../icons/menu.svg';
import XLogo from '../../icons/x.svg';

import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{position: 'sticky', top: 0, zIndex: 99}}>
        <div className="mobileNavbar">
          <a href="/">{contact_config.title}</a>
          {
            isOpen ?
            <XLogo onClick={() => setIsOpen(false)} /> :
            <MenuLogo onClick={() => setIsOpen(true)}/>
          }
        </div>
        <div className={"navbar " + (isOpen ? "vispos" : "")} onClick={() => setIsOpen(false)}>
          <a href="/#" className="navbarTitle" style={{paddingRight: "8vw"}}>{contact_config.title}</a>
          <a href="/#" className="homeDisp">Home</a>
          <a href="/#about">About</a>
          <a href="/whitetail">Whitetail</a>
          <a href="/lodging">Lodging</a>
          <a href="/pricing">Pricing</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <style jsx>
        {`
          .homeDisp {
            display: block;
          }
          .mobileNavbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            background-color: ${style_config.secondary_background_color};
            color: ${style_config.secondary_text_color};
            padding: 0px 14px;
          }
          .navbar {
            height: calc(100vh - 60px);
            position: fixed;
            transform: translateX(100vw);
            transition: 0.1s;
            width: 100vw;
            background-color: ${style_config.secondary_background_color};
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-bottom: 80px;
            z-index: 99;
          }
          .navbar a {
            color: ${style_config.primary_text_color};
            width: 100%;
            padding: 16px 16px;
            font-size: 32px;
            text-align: right;
            border-bottom: solid;
            transition: .3s;
          }
          .navbarTitle {
            display: none;
          }
          .navbar a:hover {
            color: ${style_config.brand_primary};
          }
          .vispos {
            transform: translateX(0);
          }
          @media (min-width: 769px) {
            .homeDisp {
              display: none;
            }
            .mobileNavbar {
              display: none;
            }
            .navbar {
              transform: translateX(0);
              flex-direction: row;
              height: 60px;
              padding-bottom: 0;
              position: sticky;
            }
            .navbar a {
                width: auto;
                font-size: 20px;
                border: none;
            }
          }
          @media (min-width: 887px) {
            .navbarTitle {
              display: block;
            }
          }
        `}
      </style>
    </>
  )
}