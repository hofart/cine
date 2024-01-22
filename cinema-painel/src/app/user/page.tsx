import { getUsers } from './api/user.api';
import { UserModelDTO } from './api/dto/UserModel.dto';
import Layout from '@/app/shared/layout/Layout';

export default async function UserPage() {
  const users = await getUsers() as UserModelDTO[];

  return (
    <Layout>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id_usuario}>{user.nome}</li>
        ))}
      </ul>
    </Layout>
  );
};
