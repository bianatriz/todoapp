import { Component } from '@angular/core';
import { ComponentRef } from '../../node_modules/@angular/core/index';
import { Tarefa} from "./tarefa";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];

  constructor() {
  this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: HTMLInputElement) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa.value, false);
    this.arrayDeTarefas.unshift(novaTarefa);

    descricaoNovaTarefa.value = "";
    }   

  READ_tarefas() {
  this.arrayDeTarefas = [
  new Tarefa("Estudar Frameworks WEB", false),
  new Tarefa("Comer Pizza", false),
  new Tarefa("Ajudar meus pais", false)
  ];
  }

  DELETE_tarefa(tarefaAserRemovida : Tarefa){
    this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(tarefaAserRemovida),1);
  }
 
}
