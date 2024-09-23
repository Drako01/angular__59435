import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicationsComponent } from './comunications.component';

describe('ComunicationsComponent', () => {
  let component: ComunicationsComponent;
  let fixture: ComponentFixture<ComunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComunicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
