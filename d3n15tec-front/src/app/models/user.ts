import { Anexo } from "./anexo";
import { Perfil } from "./perfil";
import { Role } from "./role";

export class User {
  public id?: number;
  public foto?: Anexo;
  public username?: string;
  public cpfCnpj?: string;
  public password?: string;
  public name?: string;
  public token?: string;
  public role: Role = Role.USER;
  public perfil: Perfil = Perfil.CLIENTE;
  public telefoneCelular?: string;
  public facebook?: string;
  public instagram?: string;
  public dataNascimento: Date = new Date();
  public createTime: Date = new Date();
  public modifyTime: Date = new Date();

}
