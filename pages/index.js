import Head from 'next/head'
import FirstComponent from './../components/firstComponents'
import TwoComponent from '../components/twoComponents'
import ThreeComponent from './../components/threeComponents'
import FourComponent from './../components/fourComponents'
import { LogoClientes } from '../components/logoClientes'
import Direitos from './../components/Direitos'
import { FernandaBio } from '../components/FernandaBio'

import { useEffect } from 'react'

import TagManager from 'react-gtm-module'
import Popup from '../components/popUp'
import FaltaDePagamento from '../components/FaltaDePagamento'


export default function Home() {


  useEffect(() => {
    const tagManagerGTM = {
      gtmId: "GTM-MWGTCZH"
    }

    TagManager.initialize(tagManagerGTM)


  })

  return (
    <>
      <Head>

        <title> Fernanda Moura - Social Media</title>
        <meta name="facebook-domain-verification" content="hwp10lq271tjjlrhatpmtu1crdkqbz" />
      </Head>

      <section>

        {/*         <FaltaDePagamento /> */}
        <FirstComponent />
        <FernandaBio />
        <ThreeComponent />
        <FourComponent />
        <TwoComponent />
        <LogoClientes />
        <Direitos />
        <Popup />
      </section>
    </>
  )
}
