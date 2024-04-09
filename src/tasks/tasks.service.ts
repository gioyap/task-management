import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './tasks.entity';
import { TaskStatus } from './tasks-status.enum';
import { TaskRepository } from './tasks.repository';

 
@Injectable()
export class TasksService {
  constructor(private taskEntityRepository: TaskRepository) {}
 
  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.taskEntityRepository.findAll(filterDto);
  }
 
  async getTaskById(id: string): Promise<Task> {
    return this.taskEntityRepository.findById(id);
  }
 
  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskEntityRepository.insert(createTaskDto);
  }
 
  async deleteTask(id: string): Promise<void> {
    return this.taskEntityRepository.deleteById(id);
  }
 
  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    return this.taskEntityRepository.updateTaskStatus(id, status);
  }
}