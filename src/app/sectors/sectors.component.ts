import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sector } from '../models/sector';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { SectorsService } from './services/sectors.service';

@Component({
  selector: 'app-sectors',
  imports: [MaterialDesignModule, CommonModule],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.scss',
})
export class SectorsComponent {
  sectors$: Observable<Sector[]>;
  displayedColumns: string[];

  constructor(
    private sectorService: SectorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.displayedColumns = ['id', 'description', 'actions'];

    this.sectors$ = this.sectorService.list();
  }

  onAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  loadSector() {
    this.sectors$ = this.sectorService.list();
  }

  deleteSector(id: number) {
    console.log(1);
    this.sectorService.deleteSector(id, () => this.loadSector());
  }

  updateSector(sector: Sector) {
    this.router.navigate(['add'], {
      relativeTo: this.route,
      queryParams: { id: sector.id, description: sector.description },
    });
  }
}
