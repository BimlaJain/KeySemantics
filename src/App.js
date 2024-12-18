import React from 'react'
import Hero from './components/Hero'
import DataSecurity from './components/DataSecurity'
import HeadlessSearch from './components/HeadlessSearch'
import KeySematicForm from './components/KeySemanticForm'
import Footer from './components/Footer'
import KeySemantics from './components/KeySemantics'
import KeyAccordion from './components/KeyAccordion'
import BackToTop from './common/BackToTop'
import KeySementicWork from './components/KeySemanticWork'

const App = () => {
  return (
    <>
      <Hero />
      <KeySementicWork />
      <KeySemantics />
      <KeyAccordion/>
      <HeadlessSearch/>
      <DataSecurity />
      <KeySematicForm/>
      <Footer />
      <BackToTop />
      </>
  )
}

export default App
