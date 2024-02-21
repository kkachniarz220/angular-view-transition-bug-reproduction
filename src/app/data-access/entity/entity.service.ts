import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  public getEntity(id: string): Observable<{ id: string }> {
    return of({
      id,
    });
  }
}
