import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavbarComponent } from './menunavbar.component';

describe('MenunavbarComponent', () => {
  let component: MenunavbarComponent;
  let fixture: ComponentFixture<MenunavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenunavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenunavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
