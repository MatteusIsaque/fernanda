import Style from './../styles/Home.module.css'
import Link from 'next/link'

export default function tabela(props) {

    return (
        <>
            <table style={{ zIndex: "50", height: "200px" }}>
                <thead>
                    <tr>
                        <th>
                            Plano Básico
                        </th>
                        <th style={{ fontSize: "1.5rem", fontWeight: "400" }}>
                            Instagram
                        </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <Link href="https://api.whatsapp.com/send?phone=556796298177&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20do%20plano%20Básico.">
                            <button className={Style.BtnForm}>Solicite Agora</button>
                        </Link>
                    </tr>
                </tfoot>
            </table>
            <table className={Style.PlanoDestaque} style={{ zIndex: "50", height: "300px" }}>
                <thead>
                    <tr>
                        <th>
                            Plano Essencial
                        </th>
                        <th style={{ fontSize: "1.5rem", fontWeight: "400" }}>
                            Instagram
                        </th>
                        <th style={{ fontSize: "14px", fontWeight: "400" }}>Recomendado</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <Link href="https://api.whatsapp.com/send?phone=556796298177&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20do%20plano%20Essencial.">
                            <button className={Style.btnUnico}>Solicite Agora</button>
                        </Link>
                    </tr>
                </tfoot>
            </table>
            <table style={{ zIndex: "50", height: "200px" }} >
                <thead>
                    <tr>
                        <th>
                            Plano Premium
                        </th>
                        <th style={{ fontSize: "1.5rem", fontWeight: "400" }}>
                            Instagram
                        </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <Link href="https://api.whatsapp.com/send?phone=556796298177&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20do%20plano%20Premium.">
                            <button className={Style.BtnForm}>Solicite Agora</button>
                        </Link>
                    </tr>
                </tfoot>
            </table>
            <table style={{ zIndex: "50" }}>
                <thead>
                    <tr>
                        <th>
                            Plano Único
                        </th>
                        <th style={{ fontSize: "1.5rem", fontWeight: "300" }}>
                            Instagram e Facebook
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style={{ lineHeight: "24px" }}><span>Plano para pequenas empresas</span></th>
                    </tr>
                    <tr>
                        <td>Consultoria</td>
                        <td>Organização de feed</td>
                        <td>Planos Personalizados</td>
                        <td>Fotografia</td>
                        <td>Dicas de postagem</td>
                        <td>Link na Bio</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <Link href="https://api.whatsapp.com/send?phone=556796298177&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20do%20plano%20Único.">
                            <button className={Style.BtnForm}>Solicite Agora</button>
                        </Link>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}