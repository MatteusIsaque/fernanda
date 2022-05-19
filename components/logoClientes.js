import Style from './../styles/Home.module.css'
import Link from 'next/link'

import LogosWindowns from './../img/logos-pc.jpg'
import LogosWindowns2 from './../img/logos-pc2.jpg'

import LogosCel from './../img/logos-mobile.jpg'
import LogosCel2 from './../img/logos-mobile2.jpg'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function LogoClientes() {

    const [width, setWidth] = useState()

    useEffect(() => {
        var LarguraTela = window.innerWidth

        setWidth(LarguraTela)
    })

    return (
        <div style={{ padding: " 0px 0% 100px" }}>
            <h2 style={{ padding: "0px 10% 0px", textAlign: "center" }}>ALGUNS DE NOSSOS CLIENTES</h2>
            {width >= 750 ?
                <>
                    <Image src={LogosWindowns} width={1920} height={150} />
                    <Image src={LogosWindowns2} width={1920} height={150} />
                </>
                :
                <>
                    <Image src={LogosCel} width={750} height={415} layout="responsive" />
                    <Image src={LogosCel2} width={750} height={415} layout="responsive" />
                </>
            }

        </div>
    )
}