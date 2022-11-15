import { Component, OnInit } from '@angular/core';
import { Anexo } from 'src/app/models/anexo';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

declare var jQuery: any;



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produto = new Produto();

  public anexo = new Anexo();

  errorMessage: string = "";

  constructor( private produtoService: ProdutoService) { }

  ngOnInit(): void {

  }

  openModalProduto(){
    jQuery('#exampleModalLong').show();
    this.produto = new Produto();
  }

  closeModalProduto(){
    jQuery('#exampleModalLong').hide();
  }

  salvarProduto(produto: Produto){
    this.produtoService.salvarProduto(
      this.produto).subscribe(data => {
    });

    this.closeModalProduto();
  }



  

}
