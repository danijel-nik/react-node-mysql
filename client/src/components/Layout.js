import { Container } from "@material-ui/core"
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <Container>
            {children}
        </Container>
        </>
    )
}

export default Layout