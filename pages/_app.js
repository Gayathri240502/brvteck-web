import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/animate.css";
import "../styles/fontawesome.css";
import "../styles/themify-icons.css";
import "../styles/animate.css";
import "../styles/sass/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
          BRV Technologies | AI, Cybersecurity, and Enterprise IT
        </title>
        <meta
          name="description"
          content="BRV Technologies offers cutting-edge AI, ML, IoT,  Cybersecurity, DevOps, and custom enterprise solutions tailored for industries and startups."
        />
        <meta
          name="keywords"
          content="BRV Technologies, AI, ML, IoT,  DevOps, CRM, ERP, HRMS, LMS, Software Development, Hyderabad IT Solutions, Application Integration, Cloud Transformation"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com" />
        <meta
          property="og:title"
          content="BRV Technologies | Intelligent IT Solutions"
        />
        <meta
          property="og:description"
          content="Digital solutions company offering AI, ML, Cybersecurity,  ERP, and cloud solutions."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.brvteck.com" />
        <meta
          property="twitter:title"
          content="BRV Technologies | Intelligent IT Solutions"
        />
        <meta
          property="twitter:description"
          content="Digital solutions company offering AI, ML, Cybersecurity, ERP, and cloud solutions."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        {/* Contact and Location Metadata */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="sales@brvteck.com" />
        <meta
          name="location"
          content="Survey No. 64, Building Number 9, Mindspace, 13th Floor, Madhapur, Hyderabad, Telangana 500081"
        />

        {/* ✅ Optimized Google Fonts (non-blocking) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
