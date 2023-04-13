import { Injectable } from '@angular/core';
import { Setting } from '../interfaces/setting';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public settings : Setting[] = [];

  constructor(private httpClient : HttpClient){
    this.getSettings();
  }

  public getSettings(): void {
    this.httpClient.get<Setting[]>('http://localhost:3000/settings').pipe(
      map((settings:Setting[]) => {
        this.settings = settings;
        return settings;
      })
    )
  }
}
