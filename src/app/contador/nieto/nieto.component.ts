import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador: number = 10;
  @Output() sincronizarContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador*=10;
    this.sincronizarContador.emit(this.contador)
  }

  reset(){
    this.contador=0
    this.sincronizarContador.emit(0)
  }
}
