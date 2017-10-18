import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubScoreComponent } from './github-score.component';

describe('GithubScoreComponent', () => {
  let component: GithubScoreComponent;
  let fixture: ComponentFixture<GithubScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
