import { Component, OnInit } from '@angular/core';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.page.html',
  styleUrls: ['./listagem-produtos.page.scss'],
})
export class ListagemProdutosPage implements OnInit {

  public todosProdutos: any

  constructor(private objeto: TipoServicoService) { 
    this.todosProdutos = objeto.enviarTodosDados ()
  }

  ngOnInit() {
  }

}
