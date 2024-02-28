import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompornentComponent } from './layout-compornent.component';

describe('LayoutCompornentComponent', () => {
  let component: LayoutCompornentComponent;
  let fixture: ComponentFixture<LayoutCompornentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCompornentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutCompornentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
