import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item = '';
  items: Array<any>
  constructor(public DS: DadesService,private router: Router) { }

  ngOnInit(): void {
    this.DS.ItemRead().subscribe(resultat => {
      this.items = resultat;
    })

  }
  initem() {
    this.DS.ItemInsert(this.item);
  }
  delitem(iid){
    this.DS.ItemDelete(iid);
  }
  detail(nom){
    this.router.navigate(['detail/'+nom]);
  }
  detail1(id){
    this.router.navigate(['detail1/'+id]);
  }
}
