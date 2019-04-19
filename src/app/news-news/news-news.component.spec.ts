import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNewsComponent } from './news-news.component';

describe('NewsNewsComponent', () => {
  let component: NewsNewsComponent;
  let fixture: ComponentFixture<NewsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
