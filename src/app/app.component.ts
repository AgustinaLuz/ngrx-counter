import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { Decrementar, Incrementar } from './store/contador/contador.actions';
import { Observable, map } from 'rxjs';
import { selectContadorValor } from './store/contador/contador.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-counter';

  public valorContador: Observable<number>;

  constructor(private store: Store<AppState>) {
    // this.valorContador = this.store.select('contador')
    this.valorContador = this.store.select(selectContadorValor);
  }

  incrementar(): void {
    this.store.dispatch(Incrementar())
  }

  decrementar(): void {
    this.store.dispatch(Decrementar())
  }
}
