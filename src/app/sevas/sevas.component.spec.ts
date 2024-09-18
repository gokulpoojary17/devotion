import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevasComponent } from './sevas.component';

describe('SevasComponent', () => {
  let component: SevasComponent;
  let fixture: ComponentFixture<SevasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SevasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
