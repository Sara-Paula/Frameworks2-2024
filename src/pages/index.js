import Footer from "./components/footer";
import Menu from "./components/navbar";
import { Container } from 'react-bootstrap';

export default function Index() {
  return <>
    <Menu />
    <Container>
      <h1>Olá turma</h1>
    </Container>
    <Footer />
  </>
}