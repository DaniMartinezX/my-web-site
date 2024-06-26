import { Component } from "react";


export default class About extends Component {
    render() {
        return(
            <div>
              <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                  <div className="row">
                  <div className="col-md-12">
                      <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="col-md-12">
                          <div className="about-desc">
                          <span className="heading-meta">About Us</span>
                          <h2 className="colorlib-heading">¿Quién soy?</h2>
                          <p>Soy desarrollador de aplicaciones multiplataforma y poseo un máster de Inteligencia Artificial y Big Data</p>
                          <p>Hablar un poco más sobre mí ...... </p>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </section>
              <section className="colorlib-about">
              <div className="colorlib-narrow-content">
                  <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">¿Qué es lo que hago?</span>
                      <h2 className="colorlib-heading">Por aquí dejo alguna habilidad</h2>
                  </div>
                  </div>
                  <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-1">
                      <span className="icon">
                          <i className="icon-bulb" />
                      </span>
                      <div className="desc">
                          <h3>Web Development </h3>
                          <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-3">
                      <span className="icon">
                          <i className="icon-phone3" />
                      </span>
                      <div className="desc">
                          <h3>Data Structures & Algorithms</h3>
                          <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-5">
                      <span className="icon">
                          <i className="icon-data" />
                      </span>
                      <div className="desc">
                          <h3>Dev Ops</h3>
                          <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                      </div>
                      </div>
                  </div>
                  {/*
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-2">
                      <span className="icon">
                          <i className="icon-data" />
                      </span>
                      <div className="desc">
                          <h3>Dev Ops</h3>
                          <p>Jenkins , Kubernetes , Docker </p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-4">
                      <span className="icon">
                          <i className="icon-layers2" />
                      </span>
                      <div className="desc">
                          <h3>Graphic Design</h3>
                          <p>My friend knows .. P</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-6">
                      <span className="icon">
                          <i className="icon-phone3" />
                      </span>
                      <div className="desc">
                          <h3>Digital Marketing</h3>
                          <p>I use Instagram eight hours a day :) </p>
                      </div>
                      </div>
                  </div>
                  */}
                  </div>
              </div>
              </section>
            </div>
          )
    }
}