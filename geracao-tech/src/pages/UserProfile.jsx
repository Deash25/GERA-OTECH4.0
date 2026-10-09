
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();

  return (
    <section>
      <h1>Perfil do Usuário</h1>
      <p>ID do usuário: {id}</p>
    </section>
  );
}