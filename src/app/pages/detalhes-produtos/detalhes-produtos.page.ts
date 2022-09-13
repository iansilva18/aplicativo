import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {

  public dados: any

  constructor(private chamaFiltro:TipoServicoService , private rote:ActivatedRoute) {

  }

  ngOnInit() {
    const id:number = Number(this.rote.snapshot.paramMap.get ('id'))
    this.dados = this.chamaFiltro.filtro(id)
  }

}
