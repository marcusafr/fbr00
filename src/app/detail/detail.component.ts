import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DadesService } from '../dades.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item = '';
  constructor(public DS: DadesService,private route: ActivatedRoute) { }

  ngOnInit(): void {
 this.item = this.route.snapshot.paramMap.get("nItem");
  }
}
