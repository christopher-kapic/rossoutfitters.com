import ArrowDownCircleLogo from '../icons/arrow-down-circle.svg'
import style_config from '../styles/config.json'

export const BackgroundVideo = ({title, children, lm="Learn more", video, lml="#", max_height="80vh"}) => {
  return (
    <>
      <div className="video_container">
        <video autoPlay="autoplay" loop="loop" muted id="hero-video">
          <source src={video} type="video/mp4"/>
        </video>
        <div>
          <h2>{title}</h2>
          {children}
          <div style={{marginTop: 40, backgroundColor: "#00000000", display: "flex", justifyContent: 'right', padding: 0, width: '100%'}}><a href={lml} style={{display: 'flex', alignItems: 'center'}}>{lm}&nbsp;<ArrowDownCircleLogo/></a></div>
        </div>
      </div>
      <style jsx>
        {`
          .video_container {
            width: 100vw;
            height: 56.25vw;
            max-height: ${max_height};
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
          }
          .video_container video {
            object-fit: cover;
            width: 100%;
            max-height: ${max_height};
            position: absolute;
            z-index: 1;
            top: 0;
          }
          .video_container div {
            width: 80vw;
            background-color: #000000c3;
            padding: 12px;
            color: white;
            border-radius: 6px;
            position: relative;
            z-index: 1;
          }
          .video_container div div {
            position: relative;
            z-index: 1;
          }
          .video_container div div a {
            position: relative;
            z-index: 20;
            color: ${style_config.brand_primary}
          }
        `}
      </style>
    </>
  )
}