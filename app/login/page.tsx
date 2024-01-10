import Container from "../components/products/Container";
import FormWrap from "../components/products/FormWrap";
import LoginForm from "./LoginForm";


const Login = () => {
    return ( <Container>
        <FormWrap>
            <LoginForm/>
        </FormWrap>
    </Container> );
}
 
export default Login;