import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import AppIcon from '../components/AppIcon';

import pslogo from '../assets/images/plebiantstudios_logo.png';
import demo1 from '../assets/images/logo_black.png';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

import FowlFlowIcon from '../assets/games/fowl-flow/fowl-flow-icon.png';
import MeteorMazeIcon from '../assets/games/meteor-maze/meteor-maze-icon.png';
import TrashyPawsIcon from '../assets/games/trashy-paws/trashy-paws-icon.png';

import LoganProfile from '../assets/images/profilepic_logan.png';
import MattProfile from '../assets/images/profilepic_matt.jpeg';
import JDProfile from '../assets/images/profilepic_jd.png';
import AlexandraProfile from '../assets/images/profilepic_alexandra.jpeg';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead" id="home">
      <div className="container vh-100">
        <div className="row h-100">
          <div className="col-md-12 my-auto">
            <img src={demo1} style={{width: '25vh'}} className="img-fluid mx-auto d-block" alt="" />
            <h1 className="section-heading text-center font-weight-bold">
              PLEBIANT STUDIOS
            </h1>
            <p className="text-center">Deviant Games. Built for Plebeians.</p>
          </div>
        </div>
      </div>
    </header>

    <section className="about text-center" id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-heading">
              About Us
            </h2>
            <p>
              We are a small studio of developers and designers that love making games. Our goal is to build fun, exciting games that are both challenging and enjoyable!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="team" id="team">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Meet the Team</h2>
          <hr className="bg-dark" />
        </div>
        <div className="row my-4">
          <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 my-4">
                  <div className="feature-item text-center">
                    <img className="profile-icon" src={LoganProfile} />
                    <h3 class="text-center">Logan Ames</h3>
                    <h5 class="text-center text-muted">Cofounder, Developer</h5>
                    {/* <p className="text-muted">
                      "doing the needfull..."
                    </p> */}
                  </div>
                </div>
                <div className="col-lg-6 my-4">
                  <div className="feature-item text-center">
                  <img className="profile-icon" src={MattProfile} />
                    <h3 class="text-center">Matt McClelland</h3>
                    <h5 class="text-center text-muted">Cofounder, Developer</h5>
                    {/* <p className="text-muted">
                      Bio here
                    </p> */}
                  </div>
                </div>
                <div className="col-lg-6 my-4">
                  <div className="feature-item text-center">
                    <img className="profile-icon" src={JDProfile} />
                    <h3 class="text-center">JD Pack</h3>
                    <h5 class="text-center text-muted">Cofounder, Developer</h5>
                    {/* <p className="text-muted">
                      Bio here
                    </p> */}
                  </div>
                </div>
                <div className="col-lg-6 my-4">
                  <div className="feature-item text-center">
                    <img className="profile-icon" src={AlexandraProfile} />
                    <h3 class="text-center">Alexandra Ames</h3>
                    <h5 class="text-center text-muted">Cofounder, Graphic Designer</h5>
                    {/* <p className="text-muted">
                      Bio here
                    </p> */}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section className="games bg-dark" id="games">
      <div className="container">
        <div className="section-heading text-center text-light">
          <h2>Games</h2>
          <hr className="bg-light" />
        </div>
        <div className="row no-gutters">
          <div className="app-showcase">
            <AppIcon size={4} title={"Fowl Flow"} icon={FowlFlowIcon}
            subtitle={"An action game where a brave duck has to avoid peril and find a bite to eat."} />
            <AppIcon size={4} title={"Meteor Maze"} icon={MeteorMazeIcon}
            subtitle={"Can you fly your ship to the wormhole in the least amount of moves?"} />
            <AppIcon size={4} title={"Trashy Paws"} icon={TrashyPawsIcon}
            subtitle={"Coming soon!"} />
          </div>
        
          {/* <div className="col-lg-2 my-auto mx-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Device Mockups</h3>
                    <p className="text-muted">
                      Ready to use HTML/CSS device mockups, no Photoshop
                      required!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p className="text-muted">
                      Put an image, video, animation, or anything else in the
                      screen!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p className="text-muted">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Open Source</h3>
                    <p className="text-muted">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
                <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>

    {/* <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section> */}

    {/* <section className="contact" id="contact">
      <div className="container">
      <div className="section-heading text-center text-light">
          <h2>Find Us On</h2>
        <Social />
      </div>
      </div>
    </section> */}

    <Footer />

  </Layout>
);

export default IndexPage;
