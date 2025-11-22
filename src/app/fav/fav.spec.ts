import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fav } from './fav';

describe('Fav', () => {
  let component: Fav;
  let fixture: ComponentFixture<Fav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
