import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './../tasks/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private tasks: Task[] = [];
  private userId: string = "1";

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks(this.userId).subscribe(tasks => this.tasks = tasks);
  }

}