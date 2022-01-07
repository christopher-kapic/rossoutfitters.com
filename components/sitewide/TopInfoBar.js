import style_config from '../../styles/config.json';
import contact_config from '../../contact.json';

import MailLogo from '../../icons/mail.svg';
import PhoneLogo from '../../icons/phone.svg';
import InstagramLogo from '../../icons/instagram.svg';
import YoutubeLogo from '../../icons/youtube.svg';
import LinkedinLogo from '../../icons/linkedin.svg';
import TwitterLogo from '../../icons/twitter.svg'

export const TopInfoBar = () => {
  return (
    <>
      <div className="topInfoBar">
        <div style={{display: "flex", flexDirection: "row"}}>
          {
            contact_config.email ?
            <>
              <a href={`mailto:${contact_config.email}`} style={{display: 'flex', alignItems: 'center'}} className='topInfoBarLink'><MailLogo/><span className='topInfoBarLink'>{contact_config.email}</span></a>
            </> : <></>
          }
          {
            contact_config.phone ?
            <>
              <a href={`tel:${contact_config.phone}`} style={{display: 'flex', alignItems: 'center'}} className='topInfoBarLink'><PhoneLogo/><span className='topInfoBarLink'>{contact_config.phone}</span></a>
            </> : <></>
          }
        </div>
        <div>
          {
              contact_config.instagram ? 
              <>
                <a href={contact_config.instagram} className='topInfoBarLink'><InstagramLogo/></a>
              </> : <></>
          }
          {
              contact_config.twitter ? 
              <>
                <a href={contact_config.twitter} className='topInfoBarLink'><TwitterLogo/></a>
              </> : <></>
          }
          {
              contact_config.linkedin ? 
              <>
                <a href={contact_config.linkedin} className='topInfoBarLink'><LinkedinLogo/></a>
              </> : <></>
          }
          {
              contact_config.youtube ? 
              <>
                <a href={contact_config.youtube} className='topInfoBarLink'><YoutubeLogo/></a>
              </> : <></>
          }
        </div>
      </div>
      <style jsx>
        {`
          .topInfoBar {
            display: none;
          }
          .topInfoBarLink {
            padding: 0px 6px;
            color: ${style_config.brand_primary};
            transition: 0.2s;
          }
          .topInfoBarLink:hover {
            color: ${style_config.brand_secondary};
          }
          @media (min-width: 769px) {
            .topInfoBar {
              width: 100vw;
              height: 40px;
              background-color: ${style_config.notification_backgound_color};
              color: ${style_config.notification_text_color};
              display: flex;
              padding: 0px 40px 0px 40px;
              justify-content: space-between;
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}