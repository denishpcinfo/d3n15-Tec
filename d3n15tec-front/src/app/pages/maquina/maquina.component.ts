import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from '../../models/maquina';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {

  public newMaquina = new Maquina();

  constructor( private maquinaService: MaquinaService) { }

  ngOnInit(): void {
    this.maquinaService.salvarMaquina(
      this.newMaquina).subscribe(data => { 
    });
  }
}