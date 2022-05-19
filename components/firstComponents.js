import Style from './../styles/Home.module.css'
import Link from 'next/link'

export default function firstComponents() {

    return (
        <>
            <div className={Style.firstComponent} />
            <div className={Style.conteudoFirst}>
                <h1>SOCIAL MEDIA</h1>
                <p>Venha fazer um orçamento <b style={{ color: "#7c1f41" }}>GRATUITO</b> para sua<br />
                    empresa ou negócio, e comece a valorizar sua<br />
                    marca na web</p>
                <Link href="https://api.whatsapp.com/send?phone=556796298177&text=Ol%C3%A1%20Fernanda">
                    <button>
                        FALE CONOSCO
                    </button>
                </Link>
            </div>
        </>
    )
}