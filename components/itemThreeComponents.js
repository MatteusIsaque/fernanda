import Style from './../styles/Home.module.css'
import Link from "next/link"

export default function itemThree(props) {
    return (
        
        <section>
            <div className={Style.itensThree}>
                <div>
                    <h3>{props.titulo1}</h3>
                    <p>Fazemos o gerenciamento de sua página no Facebook e gerenciamos o seu Instagram.</p>
                </div>
                <div>
                    <h3>{props.titulo2}</h3>
                    <p>Fazemos posts criados e com o planejamento certo para as pessoas que vão receber o seu conteudo, melhorando o engajamento de suas publicações.</p>
                </div>
            </div>
            <div className={Style.itensThree}>
                <div>
                    <h3>{props.titulo3}</h3>
                    <p>Analisamos os resultados de cada post, assim podemos entender melhor o que seus clientes esperam de sua empresa e redes sociais</p>
                </div>
                <div>
                    <h3>{props.titulo4}</h3>
                    <p>Respondemos aos comentários e comentamos em publicações para gerar mais interação com sua página (não respondemos direct).</p>
                </div>
            </div>
            <div className={Style.itensThree}>
                <div>
                    <h3>{props.titulo5}</h3>
                    <p>Todos os posts serão planejados, com alteração de estratégia para gerar mais engajamento com seu público alvo e gerar aumento de seguidores. </p>
                </div>
                <div>
                    <h3>{props.titulo6}</h3>
                    <p>Além de oferecermos artes profissionais de acordo com o seu pacote, também poderá solicitar artes personalizadas para algum evento de sua empresa.</p>
                </div>
            </div>
            <div className={Style.itensThree}>
                <div>
                    <h3>{props.titulo7}</h3>
                    <p>Gestão das suas campanhas pagas nas suas redes sociais, proporcionando maior visualização e interação com seus clientes</p>
                </div>
                <div>
                    <h3>{props.titulo8}</h3>
                    <p>Oferecemos também serviço de edição de vídeo, criação de cartão digital, criação de logo e palheta de cores.</p>
                </div>
                <div>
                    <h3>{props.titulo12}</h3>
                    <p>vídeos para reels com edição e fotos profissionais.</p>
                </div>
            </div>
            <div className={Style.itensThree}>
                <div>
                    <h3>{props.titulo9}</h3>
                    <p>Ficou com alguma dúvida se a sua empresa ou seu negócio precisa de um social média? Então entre em contato conosco e sanar todas as suas dúvidas, faça um orçamento sem compromisso pelo nosso WhatsApp ou solicite por e-mail.</p>
                    <Link href="https://api.whatsapp.com/send?phone=556796298177&text=Gostaria%20de%20contratar%20os%20outros%20servi%C3%A7os.">
                    <button className={Style.button}> Fale Conosco</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}