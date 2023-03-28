import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiochiListComponent } from './giochi-list.component';

describe('GiochiListComponent', () => {
  let component: GiochiListComponent;
  let fixture: ComponentFixture<GiochiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiochiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiochiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
