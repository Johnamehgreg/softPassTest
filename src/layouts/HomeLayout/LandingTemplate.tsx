import React, { useEffect, useState } from 'react'
import Topnav from '../../components/navbar/topnav'
import Footer from '../../components/footer/Footer'

const LandingTemplate = ({ children }: any) => {


  return (
    <main className='flex justify-center'>
      <section className='w-full'>
          <Topnav />
            <section className='pb-0 pt-12'>
              {children}
            </section>
          <Footer/>
      </section>
    </main>
  )
}

export default LandingTemplate
