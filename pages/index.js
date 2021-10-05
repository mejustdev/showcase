import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Cta from '../components/Cta'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Cta/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}
