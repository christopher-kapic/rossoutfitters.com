import contact_config from '../../contact.json';
import style_config from '../../styles/config.json';

import { useState } from 'react';
import Link from 'next/link'

export const Footer = () => {

  return (
    <footer>
      <div>
        <div>
          <span>{contact_config.title}</span>
        </div>
        <div>
          <a href={`mailto:${contact_config.email}`}>{contact_config.email}</a>
        </div>
      </div>
      <div>
        <div>
          <span>&copy;<em>{contact_config.title}</em>. All rights reserved.</span>
        </div>
        <div>
          <span>Website by <a href="https://kapic.io">Christopher Kapic</a>.</span>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: column;
            padding: 4px;
            background-color: ${style_config.primary_background_color};
            color: ${style_config.secondary_text_color};
          }
          footer div div {
            padding: 4px 0px;
            text-align: center;
          }
          @media (min-width: 769px) {
            footer {
              flex-direction: row;
              justify-content: space-around;
              background-color: ${style_config.notification_backgound_color};
              color: ${style_config.notification_text_color};
            }
            footer div div {
              text-align: left;
            }
          }
        `}
      </style>
    </footer>
  )
}