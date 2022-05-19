import Image from 'next/image'
import FernandaImagem from './../img/Renata-Moura.png'
import Style from './../styles/Home.module.css'

export function FernandaBio() {

    return (
        <div className={Style.FernandaBio}>
            <Image src={FernandaImagem} width={400} height={400}/>
            <div className={Style.TextoBio}>
                <h2>Olá, sou a Fernanda, tudo bem ?</h2>
                <p>
                    Especializada em produção de conteúdo, com formação técnica em marketing digital e tecnóloga em produção publicitaria, há mais de dois anos neste segmento, com foco principal em gerenciamento de Instagram e Facebook, Artes Gráficas, para empresas e profissionais liberais com anúncios em geral.
                </p>
            </div>
        </div>
    )
}