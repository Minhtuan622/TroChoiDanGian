import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroChoiDetailComponent } from './tro-choi-detail.component';

describe('TroChoiDetailComponent', () => {
  let component: TroChoiDetailComponent;
  let fixture: ComponentFixture<TroChoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroChoiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroChoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
