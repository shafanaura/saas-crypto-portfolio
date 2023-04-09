import { Box, Flex } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import Blog from "views/home/Blog";
import Company from "views/home/Company";
import Feature from "views/home/Feature";
import Hero from "views/home/Hero";
import HowItWorks from "views/home/HowItWorks";
import JoinCTA from "views/home/JoinCTA";
import Service from "views/home/Service";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Crypto Portfolio - Managing your crypto portfolio has never been
          easier
        </title>
        <meta
          name="description"
          content="End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
        />
        <meta
          name="keywords"
          content="website templates, React, Next.js, Chakra UI, TypeScript, SaaS, Crypto Portfolio"
        />
        <meta name="author" content="Shafa Naura Priesha Ardhynindya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Managing your crypto portfolio has never been easier"
        />
        <meta
          property="og:description"
          content="End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
        />
        <meta property="og:image" content="/img/dashboard-thumbnail.png" />
        <meta
          property="og:url"
          content="https://saas-crypto-portfolio.vercel.app/"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Managing your crypto portfolio has never been easier"
        />
        <meta
          property="twitter:description"
          content="End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
        />
        <meta property="twitter:image" content="/img/dashboard-thumbnail.png" />
      </Head>
      <Flex direction="column" gap="42px">
        <Hero />
        <Company />
        <Feature />
        <HowItWorks />
      </Flex>
      <Box bg="gray.100">
        <Service />
        <Blog />
      </Box>
      <JoinCTA />
      <Footer />
    </>
  );
};

export default Home;
