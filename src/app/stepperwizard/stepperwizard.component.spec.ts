import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperwizardComponent } from './stepperwizard.component';

describe('StepperwizardComponent', () => {
  let component: StepperwizardComponent;
  let fixture: ComponentFixture<StepperwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
