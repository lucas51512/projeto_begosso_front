import { Component, OnInit } from '@angular/core';
import { Reuniao } from './models/reuniao.model';
import { ReuniaoService } from './services/reuniao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reunioes$ = new Observable<Reuniao[]>();

  constructor(private reuniaoService: ReuniaoService) {
    this.obterReunioesCadastradas();
  }

  obterReunioesCadastradas(){
    // this.reuniaoService.getReunioes().subscribe(reunioes => this.reunioes = reunioes);
    this.reunioes$ = this.reuniaoService.getReunioes();
  }
}