import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.css']
})
export class Detail1Component implements OnInit {
  itemId = '';
  modname = '';
  constructor(public DS: DadesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get("nItem1");
    this.DS.SingleItemRead(this.itemId).subscribe(resultat =>{
      this.modname = 
      resultat.payload.data()['nom'];
    });
  }
  upitem() {
    this.DS.ItemUpdate(this.itemId, this.modname);
  }
}
