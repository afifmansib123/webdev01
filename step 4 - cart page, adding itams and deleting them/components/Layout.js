import Head from "next/head"

const Layout = ({children}) => {
    return(
        <>
        <Head>

        </Head>


        <main>
        {children}
        </main>

        <footer>
        copyright@chow
        </footer>
        </>
    )
}

export default Layout