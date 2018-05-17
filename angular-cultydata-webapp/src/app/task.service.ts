import {Injectable} from '@angular/core';
import {Task} from "./tasks/task";

@Injectable()
export class TaskService {

  tasks: Task[] = [
    {userId: "alice", taskName: "aller en vacances"},
    {userId: "alice", taskName: "prendre un cafe"},
    {userId: "alice", taskName: "acheter du beurre"},
    {userId: "bob", taskName: "Chanter (One love, One heart :-) ..... )"},
    {userId: "carlos", taskName: "Seance de dédice au fan (Robert Carlos bien sur .... :-) )"},
  ];

  getTasks(userId: string): Task[] {
    const result = this.tasks.filter(tasks => tasks.userId === userId);
    console.log(result);
    return result;
  }

}
