import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAlexComponent } from './site-alex.component';

describe('SiteAlexComponent', () => {
  let component: SiteAlexComponent;
  let fixture: ComponentFixture<SiteAlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteAlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
