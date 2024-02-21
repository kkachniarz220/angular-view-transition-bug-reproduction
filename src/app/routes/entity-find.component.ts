import {Component, inject, viewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {EntityService} from "../data-access/entity/entity.service";

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
  private _entityService = inject(EntityService);
  ngForm = viewChild.required(NgForm);

  id: string = '';

  search() {
    console.log('form submitted');
    const id = this.ngForm().value.id;
    this._entityService.getEntity(id)
      .subscribe(({id}) => {
        console.log('entity details fetched, navigation start');
        this._router.navigate(['entity', id])
          .then(() => console.log('nav end'))
      })
  }
}
