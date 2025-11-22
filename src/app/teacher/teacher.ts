import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';
import { DatePipe, LowerCasePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Parent } from '../parent/parent';
import { FormsModule } from '@angular/forms';
import { CustomPipess } from '../utils/customPipe';

@Component({
  selector: 'app-teacher',
  imports: [NgClass, Parent, FormsModule, DatePipe, UpperCasePipe, LowerCasePipe, CustomPipess],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
  providers: [],
})
export class Teacher implements OnInit {
  title = 'List of teacher';
  status = 'dong';
  check = false;
  username = '';
  images = '';
  detail = '';
  date = new Date();
  result = {
    image: '',
    detail: '',
  };

  docheck = '';

  getTitle() {
    return this.title;
  }
  teacherList;

  constructor(teacherService: TeacherService) {
    this.teacherList = teacherService.getTeachers();
    console.log('check status');
  }

  ngOnInit(): void {
    console.log('check from on init');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  ngOnChanges() {}

  handlerOnClickEvent() {
    alert('testing click event');
  }

  handlerOnEnter() {
    console.log(this.username);
  }

  confirm() {
    this.result.detail = this.detail;
    this.result.image = this.images;
    this.check = true;
  }
}
