import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

import demo1 from '../assets/images/logo_black.png';

const IndexPage = () => (
  <Layout>
    <section className="">
        <div className="container vh-100">
        <img src={demo1} style={{width: '25vh'}} className="img-fluid mx-auto d-block" alt="" />
          <h2 className="text-center">
            Oh No! No games here :(
            <br />
          </h2>
        </div>
      <div className="overlay"></div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
