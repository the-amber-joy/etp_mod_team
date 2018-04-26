import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule,
  MatDividerModule, MatSelectModule,
  MatListModule, MatDialogModule, MatDialogRef, MatDialog
} from '@angular/material';
import { OffenderDialogComponent } from './offender-dialog.component';

describe('OffenderDialogComponent', () => {
  let component: OffenderDialogComponent;
  let fixture: ComponentFixture<OffenderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
        MatInputModule,
        MatDividerModule, MatSelectModule,
        MatListModule, MatDialogModule],
      providers: [MatDialogRef],
      declarations: [OffenderDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
