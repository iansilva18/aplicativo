import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {
  
 private produtos = [
  {id: 1, nome:'betoneira' , valor: 500.00 , quantidade: 10 },
  {id: 2, nome:'capacete' , valor: 110.00 , quantidade: 10 },
  {id: 3, nome:'marreta' , valor: 200.00 , quantidade: 5 },
  {id: 4, nome:'serrote' , valor: 40.00 , quantidade: 15 },
]

private servicos = [
  {id: 1, nome:'alinhamento' , valor: 500.00},
  {id: 2, nome:'balanciamento' , valor: 110.00 },
  {id: 3, nome:'troca de oleo' , valor: 200.00},
  {id: 4, nome:'revisao' , valor: 40.00 },
]

  constructor() { }
  
  enviarTodosDados(){
    return this.produtos
   
  }

  filtro(id: number){
    const produtoSelecionado = this.produtos.filter (produto => produto.id === id)
    return produtoSelecionado [0]
  }

}