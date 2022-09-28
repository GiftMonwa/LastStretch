import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalYeaComponent } from './final-yea.component';

describe('FinalYeaComponent', () => {
  let component: FinalYeaComponent;
  let fixture: ComponentFixture<FinalYeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalYeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalYeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
