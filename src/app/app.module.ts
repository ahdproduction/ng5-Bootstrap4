import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; 
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieService } from './movie.service';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MarketViewComponent } from './market-view/market-view.component';
import { MarketViewDetailComponent } from './market-view-detail/market-view-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    MarketViewComponent,
    MarketViewDetailComponent,
    FilterPipe
  ],
  entryComponents: [
    MarketViewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [MovieService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
