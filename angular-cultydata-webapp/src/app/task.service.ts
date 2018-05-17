import {Injectable} from '@angular/core';
import {Task} from "./tasks/task";

@Injectable()
export class TaskService {

  tasks: Task[] = [
    {userId: "alice", taskName: "aller en vacances"},
    {userId: "alice", taskName: "prendre un cafe"},
    {userId: "alice", taskName: "acheter du beurre"},
    {userId: "bob", taskName: "Chanter (One love, One heart :-) ..... )"},
    {userId: "carlos", taskName: "Faire une scéance de dédice (Robert Carlos bien sur .... :-) )"},
  ];

  getTasks(userId: string): Task[] {
    return this.tasks.filter(tasks => tasks.userId === userId);
  }

}
