import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MaterialDesignModule } from '../../shared/material-design/material-design.module';
import { SectorsService } from '../services/sectors.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sector-form',
  imports: [MaterialDesignModule],
  templateUrl: './sector-form.component.html',
  styleUrl: './sector-form.component.scss',
})
export class SectorFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sectorService: SectorsService,
    private snackbar: MatSnackBar
  ) {

    this.form = this.formBuilder.group({
      description: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.sectorService.create(this.form.value).subscribe({
      next: (newSector) =>
        this.snackbar.open(`Setor ${this.form.value.description} criado.`, '', {
          duration: 1500,
        }),
      error: (err) =>
        this.snackbar.open(`Erro ao criar setor`, '', {
          duration: 1500,
        }),
    });
  }

  onCancel() {
    this.router.navigate(['/sectors']);
  }
}
