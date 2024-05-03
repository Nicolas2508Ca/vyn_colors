import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMarcaComponent } from './info-marca.component';

describe('InfoMarcaComponent', () => {
  let component: InfoMarcaComponent;
  let fixture: ComponentFixture<InfoMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
