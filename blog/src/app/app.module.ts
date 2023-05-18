import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
