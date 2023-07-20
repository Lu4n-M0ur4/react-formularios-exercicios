
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hook/useForm";

function MainPage() {
  const { form, onChange, clearInputs } = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: "",
  });

  const handleSubmitForm = (e) => {
    console.log(form);

    clearInputs(e);
  };

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleSubmitForm}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          title="O numero de módulos não pode ser menor que 2"
          pattern="^(?:[3-9]|1\d|2\d)$"
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChange}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChange}
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          title="Reposável deve ter no mínimo 5 caracteres"
          pattern="^.{6,}$"
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChange}
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
