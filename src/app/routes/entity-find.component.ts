import {Component, inject, viewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {of} from "rxjs";

@Component({
  selector: 'app-entity-find',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <form (submit)="search()">
      <input [(ngModel)]="id" name="id">

      <button>Search</button>
    </form>
  `,
  styles: ``
})
export class EntityFindComponent {

  private _router = inject(Router);
  ngForm = viewChild.required(NgForm);

  id: string = '';

  search() {
    console.log('form submitted');
    const id = this.ngForm().value.id;
    this.getEntity(id)
      .subscribe(({id}) => {
        console.log('entity details fetched, navigation start');
        this._router.navigate(['entity', id])
          .then(() => console.log('nav end'))
      })
  }

  private getEntity(id: string) {
    return of({id});
  }
}
