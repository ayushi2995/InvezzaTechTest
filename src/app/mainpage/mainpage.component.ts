import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ComicbookServiceService } from './comicbook-service.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})



export class MainpageComponent implements OnInit {
 comicData:any;
 searchText='';

 page: number = 1;
 count: number = 0;
 tableSize: number = 10;
 
  constructor(
    private router: Router,
    public socialAuthService: SocialAuthService,
    public comicBookService: ComicbookServiceService,

    ) {
  }

  ngOnInit(): void {
    this.comicBookService.getCharactors().subscribe((response:any) => {
      this.comicData = response.results;
      console.log(response)
    })
      
  }

  logout(): void {
  this.socialAuthService.signOut().then(() => {
    console.log("Logout")
    this.router.navigate(['login'])
  });
  }

  showDetails(detail:any) { 
    this.comicBookService.characterDetail = detail;
    this.router.navigateByUrl('/characterdetail');
 }

 onTableDataChange(dataChange: any) {
  this.page = dataChange;
  this.comicData();
}

}
