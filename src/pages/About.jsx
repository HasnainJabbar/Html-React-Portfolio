import React from 'react'
import ServiceCard from '../components/Cards/ServiceCard'
import TestimonialCards from '../components/Cards/TestimonialCards'
import Clients from '../components/Cards/Clients'
const About = () => {
  return (
    <>
      <article className="about  active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy
            turning complex problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </section>
        <ServiceCard />
        <TestimonialCards />
        <Clients/>
        

      </article>
    </>
  )
}

export default About
