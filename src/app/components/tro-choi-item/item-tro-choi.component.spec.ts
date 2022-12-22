import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTroChoiComponent } from './item-tro-choi.component';

describe('ItemTroChoiComponent', () => {
  let component: ItemTroChoiComponent;
  let fixture: ComponentFixture<ItemTroChoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTroChoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTroChoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
