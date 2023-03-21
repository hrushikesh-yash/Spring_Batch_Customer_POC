import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponent } from './sample-test.component';

describe('SampleTestComponent', () => {
  let component: SampleTestComponent;
  let fixture: ComponentFixture<SampleTestComponent>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

     h1=fixture.nativeElement.querySelector('h1');
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Show Alert Message', () => {
  expect(component.showMessage("Test message")).toBe("Test message");

  });

  it('Show Addition result', () => {
    expect(component.Addition(30,40)).toBeGreaterThanOrEqual(60);
  });

  it('Check Header', () => {
    component.getHeader();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.header);

  });
  

});
