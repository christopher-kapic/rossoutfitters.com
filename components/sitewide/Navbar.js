import contact_config from '../../contact.json';
import style_config from '../../styles/config.json';

import MenuLogo from '../../icons/menu.svg';
import XLogo from '../../icons/x.svg';

import { useState } from 'react';
import Link from 'next/link'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{position: "sticky", top: 0, zIndex: 99, height: 60, boxShadow: "0px 2px 4px #444444"}}>
      <div style={{width: "100%", top: 0, zIndex: 99}} className='navWrap'>
        <div className="mobileNavbar">
          <Link href="/">
            <a>{contact_config.title}</a>
          </Link>
          {
            isOpen ?
            <XLogo onClick={() => setIsOpen(false)} /> :
            <MenuLogo onClick={() => setIsOpen(true)}/>
          }
        </div>
        <div className={"navbar " + (isOpen ? "vispos" : "")} onClick={() => setIsOpen(false)}>
          <Link href="/#">
            <a className="navbarTitle" style={{paddingRight: "8vw"}}>{contact_config.title}</a>
          </Link>
          <Link href="/#">
            <a className="homeDisp">Home</a>
          </Link>
          <Link href="/#about">
            <a>About</a>
          </Link>
          <Link href="/whitetail">
            <a>Whitetail</a>
          </Link>
          <Link href="/lodging">
            <a>Lodging</a>
          </Link>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .navWrap {
            position: fixed;
          }
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
            .navWrap {
              position: sticky;
            }
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
    </nav>
  )
}