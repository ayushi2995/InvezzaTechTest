import { Component, OnInit } from '@angular/core';
import { ComicbookServiceService } from '../mainpage/comicbook-service.service';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.scss']
})
export class CharacterdetailComponent implements OnInit {

comicCharDetail : any = this.comicBookService.characterDetail;

  constructor(
    
    public comicBookService: ComicbookServiceService

    ){}

  ngOnInit(): void {
console.log(this.comicCharDetail);
}

}

