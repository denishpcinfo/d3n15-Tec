import { Anexo } from "./anexo";
import { CategoriaProduto } from "./categoria-produto";

export class Produto {

    public id?: number;
    public foto: Anexo = new Anexo();
    public name?: string;
    public descricao?: string;
    public precoCompra?: number;
    public precoVenda?: number;
    public quantidade?: number;
    public disponivel?: Boolean;
    public categoriaProduto: CategoriaProduto = CategoriaProduto.BEBIDAS_ALCOOLICAS;
    public dataNascimento: Date = new Date();
    public createTime: Date = new Date();
    public validadeProduto: Date = new Date();
    public totalVendas?: number;
}
