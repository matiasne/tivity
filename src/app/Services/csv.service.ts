import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { File } from '@ionic-native/file/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {


  public headerRow = new BehaviorSubject <any>("");
  public csvData = new BehaviorSubject <any>("");

  constructor(
    private papa: Papa,
  ) { }

  public getTextFormFile(files: FileList){
    if (files && files.length > 0) {
      const file:any = files.item(0); //assuming only one file is uploaded
      console.log('Uploaded file, Filename:' + file.name + 'Filesize:' + file.size + 'Filetype:' + file.type);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const fileContent: string = reader.result as string;
        console.log('fileContent:' + fileContent);
        this.extractData(fileContent)
       // const lines: string[] = fileContent.split('\n'); //this depends on your line end character, I'm using \n in general
      //lines is an array of string, such as "Sham went to school", loop over it and process as you like
      };
    }
  }

  private extractData(res) {
    let csvData = res || '';    
    this.papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow.next(parsedData.data.splice(0, 1)[0]);
        this.csvData.next(parsedData.data);
      }
    });
  }

  obsHeader(): Observable<any>{
    return this.headerRow.asObservable();
  }

  obsData(): Observable<any>{
    return this.csvData.asObservable();
  }

  getHeader(){
    return this.headerRow.value
  }

  getData(){
    return this.csvData.value
  }

}
