import { Injectable } from '@angular/core';
import { Adventure } from '../interfaces/adventure';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  public adventures : Adventure[] = [];

  constructor(private httpClient : HttpClient){
    this.getAdventures();
  }

  public getAdventures(): Observable<Adventure[]> {
    return this.httpClient.get<Adventure[]>('http://localhost:3000/Adventures').pipe(
      map((adventures: Adventure[]) => {
        this.adventures = adventures;
        return adventures;
      })
    );
  }
}
