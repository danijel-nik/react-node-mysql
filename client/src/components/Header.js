import logo from '../logo.svg';
import { Container, Grid } from "@material-ui/core"

const Header = () => {
    return (
        <header className="App-header">
            <Container>
                <Grid container alignItems="center">
                    <Grid md={4} className="logoContainer">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h5>React Node MySQL</h5>
                    </Grid>
                    
                    <Grid className="nav">
                        <a href="#" className="App-link">Link</a>
                        <a href="#" className="App-link">Link</a>
                        <a href="#" className="App-link">Link</a>
                        <a href="#" className="App-link">Link</a>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header