import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewSessionComponent } from './body/create-new-session/create-new-session.component';
import { CreateNewSprintComponent } from './body/create-new-sprint/create-new-sprint.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { EditPageComponent } from './body/task-details/edit-page/edit-page.component';
import { LogWorkComponent } from './body/task-details/log-work/log-work.component';
import { TaskDetailsComponent } from './body/task-details/task-details.component';
import { TasksComponent } from './body/tasks/tasks.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'CreateNewSession', component: CreateNewSessionComponent},
  {path: 'StartNewSprint', component: CreateNewSprintComponent},
  {path: 'Tasks/:category/:currentSprintName', component: TasksComponent},
  {path: 'TaskDetails/:taskId', component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
