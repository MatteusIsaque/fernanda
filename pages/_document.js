import Document, { Html, Head, Main, NextScript } from 'next/document'
class WebDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-M5J8FT3');`}}></script>
                    <meta name="facebook-domain-verification" content="571mb1b6mj70urfiht4pi1acarrs9s" />
                    <meta name="facebook-domain-verification" content="hwp10lq271tjjlrhatpmtu1crdkqbz" />
                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5J8FT3"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default WebDocument