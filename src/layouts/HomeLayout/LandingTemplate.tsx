import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Topnav from '../../components/navbar/topnav'

const LandingTemplate = ({ children }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
