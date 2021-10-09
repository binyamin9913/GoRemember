import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { FilesNames } from '../model/filesNames.model';

@Injectable({
  providedIn: 'root'
})
export class StratLimudService {

  constructor(private http: HttpClient) { }

getContentFromFile(pageId:string):Observable<string>{
  const fileNames:FilesNames = new FilesNames();
  return this.http.get('app/blasses/'+ fileNames.getFileContent(pageId),{responseType: 'text'})
}

}
