// import { HttpClientModule } from '@angular/common/http';

// // import { ComponentFixture, TestBed } from "@angular/core/testing";
// // import { FormsModule } from '@angular/forms';
// // import { Router } from '@angular/router';
// import { GraphComponent } from '@swimlane/ngx-graph';
// import { AppRoutingModule, routes } from './app-routing.module';
// import { AppComponent } from "./app.component";
// import { TabularComponent } from './Customer/tabular/tabular.component';
// import { StudentComponent } from './student/student.component';
// // import { RouterTestingModule } from '@angular/router/testing';
// import {Location} from '@angular/common';

// describe("AppComponent", () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   // let myService: MyService;
//   let objRouter: Router;
//   let location: Location;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AppComponent,StudentComponent,TabularComponent,GraphComponent],
      
//       imports: [AppRoutingModule,FormsModule,HttpClientModule,
//       RouterTestingModule.withRoutes(routes)
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//     // myService = TestBed.inject(MyService);
//   });

//   describe('method1', () => {
//     it('should ...', () => {
//       expect(component).toBeTruthy();
//     });
//   });

//   // it('Default Route Test', async() => {

//   //   fixture.detectChanges();
//   //   fixture.whenStable().then(() => {
//   //     expect(location.path()).toEqual('/Tabular');
//   //   });
//   // });
// })