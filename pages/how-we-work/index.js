import React, { Fragment } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import workImg from '@/public/img/services/app/a3.jpg';

const HowWeWorkPage = () => {
    const ClickHandler = () => window.scrollTo(10, 0);

    const days = [
        {
            day: "Day 1",
            title: "Discovery & Requirement Gathering",
            desc: "We initiate by understanding your vision and business objectives through collaborative meetings and brainstorming.",
        },
        {
            day: "Day 2",
            title: "Strategy & Architecture Planning",
            desc: "We define the roadmap, finalize tech stack, architecture, and outline key deliverables aligned with your goals.",
        },
        {
            day: "Day 3",
            title: "UI/UX Design & Wireframing",
            desc: "Design mockups and interactive wireframes that bring your vision to life with an exceptional user experience.",
        },
        {
            day: "Day 4",
            title: "Development Kickoff",
            desc: "We start agile development, breaking down the project into sprints while maintaining full transparency.",
        },
        {
            day: "Day 5",
            title: "QA & Testing",
            desc: "Rigorous testing for performance, functionality, and security ensures a smooth and reliable product.",
        },
        {
            day: "Day 6",
            title: "Delivery & Feedback Loop",
            desc: "We deliver the working solution, collect feedback, and plan for future iterations or improvements.",
        },
    ];

    return (
        <Fragment>

            <Head>
        <title>How We Work | BRV Technologies | IT & Business Consulting</title>
        <meta
          name="description"
          content="Discover how BRV Technologies delivers innovative IT and business consulting solutions. Learn about our collaborative, client-focused approach."
        />
        <meta
          name="keywords"
          content="How We Work, BRV Technologies Process, IT Consulting Methodology, Business Transformation, Agile, Consulting Steps"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/how-we-work" />
        <meta property="og:title" content="How We Work | BRV Technologies" />
        <meta
          property="og:description"
          content="Explore BRV Technologies' structured yet agile consulting process. From discovery to delivery, we ensure results that matter."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.brvteck.com/how-we-work" />
        <meta property="twitter:title" content="How We Work | BRV Technologies" />
        <meta
          property="twitter:description"
          content="See how we work to deliver top-tier IT & business solutions. Our step-by-step process ensures clarity, quality, and client satisfaction."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        <link rel="canonical" href="https://www.brvteck.com/how-we-work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <Header />
            <main className="page_content how-we-work-page">
                <PageTitle pageTitle="How We Work" pagesub="6-Day Agile Cycle" pageTop="Process" />

                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 order-lg-last">
                                <div className="how_we_work_image">
                                    <Image src={workImg} width={800} alt="How We Work" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Fast, Focused &
                                            <span className="badge bg-secondary text-white">Result-Driven</span>
                                        </div>
                                        <h2 className="heading_text">
                                            BRVTECK’s 6-Day Agile Delivery Cycle
                                        </h2>
                                        <p className="heading_description mb-0">
                                            At BRVTECK, speed meets strategy. Our 6-day process helps us convert ideas into functional solutions with precision, collaboration, and transparency.
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} href="/contact" className="btn mt-4">
                                        <span className="btn_label" data-text="Start Your Project">Start Your Project</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team_section section_space">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text">
                                <span className="badge bg-secondary text-white">BRVTECK</span>
                                6 Days Workflow
                            </div>
                            <h2 className="heading_text mb-0">
                                Transforming Ideas into Digital Success
                            </h2>
                        </div>

                        <div className="row">
                            {days.map((step, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                                    <div className="team_block text-center p-4 border rounded-3 shadow-sm bg-white h-100">
                                        <h4 className="text-primary fw-bold">{step.day}</h4>
                                        <h5 className="team_member_name">{step.title}</h5>
                                        <p className="team_member_designation">{step.desc}</p>
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

export default HowWeWorkPage;
