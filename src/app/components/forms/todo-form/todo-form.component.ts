import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/shared/Item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() submitTodo = new EventEmitter<Item>();

  todoForm = this.fb.group({
    title: this.fb.control('', {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ]),
    }),
    description: this.fb.control('', {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(20),
      ]),
    }),
    done: this.fb.control(false, { nonNullable: true }),
    involvedPersons: this.fb.array([
      this.fb.control('', {
        nonNullable: true,
        validators: Validators.compose([Validators.minLength(5)]),
      }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  get controls() {
    return this.todoForm.controls;
  }

  addPerson(): void {
    this.todoForm.controls.involvedPersons.push(
      new FormControl('', {
        nonNullable: true,
        validators: Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(50),
        ]),
      })
    );
  }

  submitForm(): void {
    const formValues = this.todoForm.getRawValue();
    const involvedPersons = formValues.involvedPersons.filter(
      (person) => !!person
    );
    const newTodo: Item = {
      ...formValues,
      involvedPersons,
    };
    console.log(JSON.stringify(newTodo));

    this.submitTodo.emit(newTodo);
  }
}
