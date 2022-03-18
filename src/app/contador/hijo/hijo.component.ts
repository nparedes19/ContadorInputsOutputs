import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador: number = 10;
  @Output() sincronizarContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador*=2;
    this.sincronizarContador.emit(this.contador)
  }

  dividir(){
    this.contador/=2
    this.sincronizarContador.emit(this.contador)
  }

  sincronizar(valor:any){
    this.contador = valor
    this.sincronizarContador.emit(this.contador)
  }
}
