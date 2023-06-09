import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Materials
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabularComponent } from './Customer/tabular/tabular.component';
import { GraphicalComponent } from './Customer/graphical/graphical.component';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//
import { SampleTestComponent } from './sample-test/sample-test.component';
import { StudentComponent } from './student/student.component';
//
import { FormsModule } from '@angular/forms';
// import { timer } from 'd3-timer'
//Charts


//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabularComponent,
    GraphicalComponent,
    SampleTestComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // Angular Materials
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule
    //
    // NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
