import {TaskService} from './../task.service';
import {Component, Input, OnInit} from '@angular/core';
import {Task} from './../tasks/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  @Input() userId: string;

  constructor(private service: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.service.getTasks(this.userId);
  }

}
