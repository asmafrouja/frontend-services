import { Component, OnInit } from '@angular/core';
import { DataService } from '../views/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-expert',
  templateUrl: './details-expert.component.html',
  styleUrls: ['./details-expert.component.css']
})
export class DetailsExpertComponent implements OnInit {
  id = '';
  public experts: any = {};

  constructor(private route: ActivatedRoute, private ds: DataService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.details(this.id);
    }
  }

  details(id: any) {
    this.ds.getOneExpert(id).subscribe(result => {
      this.experts = result;
      console.log(result);
    });
  }
}
