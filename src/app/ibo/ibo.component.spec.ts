import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IboComponent } from './ibo.component';

describe('IboComponent', () => {
  let component: IboComponent;
  let fixture: ComponentFixture<IboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
