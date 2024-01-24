import { UserModelDTO } from '../api/dto/UserModel.dto'
// percorre cada chave e cria um tipo que possui as mesmas propriedades com os mesmos tipos.
type UserModelProps = { [P in keyof UserModel]: UserModel[P] }

export class UserModel {
  id_usuario?: number
  nome: string
  email: string
  senha: string
  id_tenant: number

  constructor(model: UserModelProps) {
    this.id_usuario = model.id_usuario
    this.nome = model.nome ?? ''
    this.email = model.email ?? ''
    this.senha = model.senha
    this.id_tenant = model.id_tenant
  }
  // instancia a propria classe para ser utilizada no endpoint de get.
  static fromDTO(dto: UserModelDTO): UserModel {
    return new UserModel(dto)
  }
  // instancia a propria classe para ser utilizada nos endpoints de put/post
  static toDTO(user: Partial<UserModel>): Partial<UserModelDTO> {
    return {
      id_usuario: user.id_usuario,
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      id_tenant: user.id_tenant
    }
  }
}
