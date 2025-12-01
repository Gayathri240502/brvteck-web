import React, { Fragment } from "react";

import Head from "next/head";

import Header from "@/components/header/Header";

import PageTitle from "@/components/pagetitle/PageTitle";

import Scrollbar from "@/components/scrollbar/scrollbar";

import Footer from "@/components/footer/Footer";

import CtaSection from "@/components/CtaSection/CtaSection";
 
import Image from "next/image";

import Link from "next/link";
 
const Services = [

  {

    title: "Chatbots & Virtual Assistants",

    path: "/ai/nlp/chatbots",

    col: "col-lg-4 col-md-6",

    sImg: "/img/ai-ml/nlp1.jpg",

  },

  {

    title: "Sentiment & Emotion Analysis",

    path: "/ai/nlp/sentiment-analysis",

    col: "col-lg-4 col-md-6",

    sImg: "/img/ai-ml/nlp2.jpg",

  },

  {

    title: "Text Summarization & Translation",

    path: "/ai/nlp/summarization-translation",

    col: "col-lg-4 col-md-6",

    sImg: "/img/ai-ml/nlp3.jpg",

  },

];
 
const Service = {

  title: "NLP & Conversational AI",

  description: `Leverage advanced NLP and conversational AI technologies to create human-like interactions. Build chatbots and virtual assistants, analyze sentiment, and summarize or translate text to enhance communication and customer engagement.`,

  images: ["/img/services/ai-ml/nlp_main.jpg"],

};
 
const NLP = () => {

  const ClickHandler = () => {

    window.scrollTo(10, 0);

  };
 
  return (
<Fragment>
<Head>
<title>BRVTeck | NLP & Conversational AI</title>
<meta

          name="description"

          content="Explore BRVTeck's NLP and Conversational AI services: chatbots, sentiment analysis, text summarization, and real-time translation for intelligent business communication."

        />
</Head>
<Header />
<main className="page_content service-single-page">
<PageTitle pageTitle={Service.title} pagesub="AI" pageTop="Artificial" />
 
        <section className="service_details_section section_space bg-light">
<div className="container">
<div className="details_item_image position-relative mb-4">
<Image

                src={Service.images[0]}

                alt="NLP Service"

                width={2100}

                height={400}

                style={{ width: "1600px", height: "500px" }}

              />
</div>
 
            <h2 className="details_item_title">{Service.title}</h2>
<p>{Service.description}</p>
 
            <div className="row mt-5 g-4">

              {Services.map((service, index) => (
<div className="col-lg-4 col-md-7 col-12" key={index}>
<div className="service_card h-100 position-relative overflow-hidden rounded-4 shadow-lg border-0 transition-all">
<Link href={service.path} legacyBehavior>
<a className="service_image_wrapper position-relative d-block text-decoration-none" onClick={ClickHandler}>
<Image

                          src={service.sImg}

                          alt={service.title}

                          width={500}

                          height={500}

                          className="img-fluid w-100 service_image"

                          style={{ height: "350px", objectFit: "cover" }}

                        />
<div className="image_overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4">
<div className="overlay_gradient position-absolute top-0 start-0 w-100 h-100"></div>
<div className="service_content_overlay position-relative z-2 w-100">
<h3 className="service_title text-white fs-4 fw-bold mb-3 lh-sm">{service.title}</h3>
</div>
</div>
</a>
</Link>
</div>
</div>

              ))}
</div>
</div>
</section>
</main>
<CtaSection />
<Footer />
<Scrollbar />
</Fragment>

  );

};
 
export default NLP;

 