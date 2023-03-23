import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import { AppRoutingModule } from '../app-routing.module';
import { FakeCustomerService } from '../Services/fake-customer.service';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let services:FakeCustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers:[FakeCustomerService],
      imports: [FormsModule, HttpClientModule, AppRoutingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    services=TestBed.inject(FakeCustomerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('interpolation tests', () => {

    const name = fixture.debugElement.nativeElement.querySelector('#name');
    // expect(name.innerHTML).toEqual(component.name);
    component.name = "Names is Updated";
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.name);

  });

  it('interpolation test for textBox Type', () => {
    const inputval: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    expect(inputval.type).toEqual(component.type);
    component.type = "text";
    fixture.detectChanges();
    expect(inputval.type).toEqual(component.type);

  });

  it('PropertyBinding test', () => {
    const inputval: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    expect(inputval.readOnly).toBeFalsy();
    component.userReadOnly = true;
    fixture.detectChanges();
    expect(inputval.type).toEqual(component.type);

  });

  it('Attribute Binding test', () => {

    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonId');

    expect(element.getAttribute('aria-label')).toEqual(component.ariaLabel.toString());

  });

  it('Submit button test', () => {

    const submit: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submit');

    expect(component.label).toEqual(component.label.toString());

    submit.click();
    fixture.detectChanges();
    expect(component.label).toEqual("Submit button Clicked");
  })

  it('Reset button test', () => {

    const reset: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#reset');

    expect(component.label).toEqual(component.label.toString());

    reset.click();
    fixture.detectChanges();
    expect(component.label).toEqual("Reset button Clicked");
  })

  it('Input text', () => {

    const inputText: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox1');

    expect(component.label).toEqual(component.label.toString());

    inputText.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("Label value changed");
  })

  it('Input Dynamic text', () => {

    const inputText: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox2');

    expect(component.label).toEqual(component.label.toString());
    inputText.value = "this is Angular testing text";
    inputText.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("this is Angular testing text");
  });

  it('Customer Name with Two way data binding', (done) => {

    component.customerName = "Yash Name Updated";
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputName');
      expect(inputElement.value).toEqual("Yash Name Updated");
      done();
    });
  });

  it('Set Customer Name textBox', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputName');
      inputElement.value = "Text box updated successfully";
      inputElement.dispatchEvent(new Event('input'));
      expect(inputElement.value).toEqual(component.customerName);
      done();
    })

  });


  it('Reset button test async method', fakeAsync(() => {
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#SetName');
    tick();
    // fixture.whenStable().then(() => {
    button.click();
    expect(component.customerName).toEqual("Reset Value");
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputName');
      expect(inputElement.value).toEqual("Reset Value");
    });
    // done();
    // });


  }));


  it('ngFor array test', () => {

    const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.ngFor1'));
    expect(element.length).toEqual(7);

    element.forEach((Obj: DebugElement, index: number) => {

      expect(Obj.children[0].nativeElement.innerHTML.trim()).toEqual(component.colorNames[index]);

    });

  });

  it('ngFor 2darray test', () => {

    const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.ngFor2'));
    expect(element.length).toEqual(4);

    element.forEach((Obj: DebugElement, index: number) => {

      expect(Obj.children[0].nativeElement.innerHTML.trim()).toEqual(component.colorlist[index].id + ' -- ' + component.colorlist[index].colorName);

    });

  });

  it('test to Chek for Subscribe Method', fakeAsync(() => {

    let spy=spyOn(services,'getListOfData').and.returnValue(of([]));
    let subspy=spyOn(services.getListOfData(), 'subscribe');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(spy).toHaveBeenCalled();

  }));





});


function Obj(value: DebugElement, index: number, array: DebugElement[]): void {
  throw new Error('Function not implemented.');
}

