
import validation from '../Validation/consultaPedidoValidation';
import login from '../Pages/loginPage';

describe('Realizar testes após autenticado', () => {
  it('Deve validar que o Login foi bem sucedido', () => {
    validation.validationLoginSucess();
  });

  it.only('Login Com Token e session', () => {
    login.efetuarLogin();
  });
});
