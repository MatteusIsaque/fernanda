import ItemComponent from './itemThreeComponents'
import Style from './../styles/Home.module.css'

export default function threeComponent() {

    return (
        <div className={Style.threeComponent}>
            <h2>SEGUEM ABAIXO OS SERVIÇOS INCLUSOS</h2>
            <ItemComponent  
            titulo1="GERENCIAMENTO DE REDES SOCIAIS" 
            titulo2="PLANEJAMENTO DE CONTEÚDO" 
            titulo3="ANÁLISE DE MÉTRICAS" 
            titulo4="RESPONDER OS COMENTÁRIOS" 
            titulo5="CRIAÇÃO ESTRATÉGIAS" 
            titulo6="ARTES PERSONALIZADAS" 
            titulo7="GESTÃO DE TRÁFEGO"
            titulo8="OUTROS SERVIÇOS" 
            titulo10="CARTÃO DIGITAL"
            titulo11="CRIAÇÃO DE LOGO" 
            titulo12="PRODUÇÃO" 
            titulo9="SUPORTE A ATENDIMENTO 24H POR DIA
            "/>
        </div>
    )
}