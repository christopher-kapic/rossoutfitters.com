import Head from 'next/head'
import { Navbar } from '../components/sitewide/Navbar'
import { TopInfoBar } from '../components/sitewide/TopInfoBar'
import { BackgroundVideo } from '../components/backgroundVideo';

import style_config from '../styles/config.json';
import { Footer } from '../components/sitewide/Footer';

export default function Home() {
  return (
    <div>
    {/* <div className={styles.container}> */}
      <Head>
        <title>Ross Outfitters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopInfoBar />
      <Navbar />

      <main className="main">
        <BackgroundVideo title="Trophy Whitetail Hunting" video="https://rossoutfitters.b-cdn.net/ro-wt34.mp4" lml="#about">
          <p>Vernon County - a <a style={{textDecoration: "underline"}} href="https://www.whitetailproperties.com/knowledge-center/the-biggest-bucks-killed-in-the-last-five-years">top place for trophy hunting</a>!</p>
        </BackgroundVideo>

        <div className="contentDiv">
        <h1 id="whitetail" style={{paddingTop: 80}}>Whitetail</h1>

        <p>Vernon County, WI is a premier hunting location for whitetail deer. White Tail Properties reports that <a href="https://www.whitetailproperties.com/knowledge-center/the-biggest-bucks-killed-in-the-last-five-year" style={{textDecoration: "underline"}}>five trophy bucks have been shot in the last five years in Vernon County</a>, second only to Otter Tail in Minnesota.</p>

        <p>For your chance to participate in the top quality hunting afforded in Wisconsin, <a href="mailto:rossoutfitters@protonmail.com">email us</a> today! <span>Note: online sales coming soon.</span></p>

        </div>
      </main>
      <Footer />
      <style jsx>
        {`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: ${style_config.primary_background_color};
          }
          .contentDiv {
            width: 100vw;
            padding: 8px;
          }
          @media (min-width: 769px) {
            .contentDiv {
              width: 700px;
              padding: 8px;
            }
          }
        `}
      </style>

    </div>
  )
}
