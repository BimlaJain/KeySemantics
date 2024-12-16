import React from 'react'
import Hero from './components/Hero'
import KeysemanticsWork from './components/KeysemanticsWork'
import DataSecurity from './components/DataSecurity'
import HeadlessSearch from './components/HeadlessSearch'
import FormValidation from './components/FormValidation'
import Footer from './components/Footer'
import KeySemantics from './components/KeySemantics'
import KeyAccordion from './components/KeyAccordion'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <>
    <>
      <Hero />
      <KeysemanticsWork />
      <KeySemantics />
      <KeyAccordion/>
      <HeadlessSearch/>
      <DataSecurity />
      <FormValidation />
      <Footer />
    </>
      <BackToTop />
      </>
  )
}

export default App
