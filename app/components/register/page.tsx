import Container from "../products/Container";
import FormWrap from "../products/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return ( 
        <Container>
            <FormWrap>
                <RegisterForm/>
            </FormWrap>
        </Container>
     );
}
 
export default Register;