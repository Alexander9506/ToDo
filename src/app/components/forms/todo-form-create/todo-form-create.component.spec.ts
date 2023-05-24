import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormCreateComponent } from './todo-form-create.component';

describe('TodoFormCreateComponent', () => {
  let component: TodoFormCreateComponent;
  let fixture: ComponentFixture<TodoFormCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormCreateComponent]
    });
    fixture = TestBed.createComponent(TodoFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
