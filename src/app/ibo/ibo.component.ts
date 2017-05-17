import { Component, OnInit } from '@angular/core';

import { IboService } from '../ibo.service';
import { Ibo } from '../ibo';

@Component({
  selector: 'app-ibo',
  templateUrl: './ibo.component.html',
  styleUrls: ['./ibo.component.css']
})

export class IboComponent implements OnInit {
  ibos:Ibo[];

  constructor(private iboService:IboService) {
    this.iboService.getAccessToken()
      .subscribe(data => {
        //console.log(data);
        this.getIbos(data.access_token)
      });
  }

  getIbos(accessToken:string){
    this.iboService.getIbos(accessToken)
      .subscribe(ibos => {
        this.ibos = ibos;
        console.log(ibos);
      });
  }

  ngOnInit() {}
}
