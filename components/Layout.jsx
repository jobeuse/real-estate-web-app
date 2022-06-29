import Head from "next/head";
import {Box} from '@chakra-ui/react' 
import Navbar from "./Navbar";
import Footer from "./Footer"; 
const Layout = ({children}) =>(
    <>
            <Head>
                <title>Welcome to Next.js!</title>
            </Head>
            <Box>
                <header>
                   <Navbar/>
                </header>
                <main>
                    {children}
                </main>
                <Footer>
                    footer
                </Footer>
            </Box>

    </>
)

export default Layout;