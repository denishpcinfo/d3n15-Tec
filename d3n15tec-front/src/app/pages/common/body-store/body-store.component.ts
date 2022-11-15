import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-body-store',
  templateUrl: './body-store.component.html',
  styleUrls: ['./body-store.component.css']
})
export class BodyStoreComponent implements OnInit {

  public produtoList1 = new Produto;
  public produtoList2 = new Produto;
  public produtoList3 = new Produto;
  public produtoList4 = new Produto;
  public produtoList5 = new Produto;
  public tamanho?: number; 

  constructor( private produtoService: ProdutoService) { }

  ngOnInit(): void {

    this.produtoService.getFindAllProduto().subscribe(dataProduto => {
      this.produtoList1 = dataProduto[0];
      this.produtoList2 = dataProduto[1];
      this.produtoList3 = dataProduto[2];
      this.produtoList4 = dataProduto[3];
      this.produtoList5 = dataProduto[4];
    });
  }

}
