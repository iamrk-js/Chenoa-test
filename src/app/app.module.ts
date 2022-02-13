import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YourTitleComponent } from './components/your-title/your-title.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VivaThumbnailComponent } from './components/viva-thumbnail/viva-thumbnail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { LatestBlogPostComponent } from './components/latest-blog-post/latest-blog-post.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NobodyFoolsComponent } from './components/nobody-fools/nobody-fools.component';
import { WigetSectionComponent } from './components/wiget-section/wiget-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialHeaderComponent } from './components/social-header/social-header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    YourTitleComponent,
    CarouselComponent,
    VivaThumbnailComponent,
    AboutUsComponent,
    QuickLinksComponent,
    LatestBlogPostComponent,
    ContactUsComponent,
    HomePageComponent,
    HeaderComponent,
    NobodyFoolsComponent,
    WigetSectionComponent,
    FooterComponent,
    PostsComponent,
    CopyrightComponent,
    SocialHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
