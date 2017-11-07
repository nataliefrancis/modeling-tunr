import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagersComponent } from './managers.component';
import { ManagerIndexComponent } from './manager-index/manager-index.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { ManagerNewComponent } from './manager-new/manager-new.component';
import { ManagerShowComponent } from './manager-show/manager-show.component';


const aboutRoutes: Routes = [
    {
        path: 'managers',
        component: ManagersComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: ManagerIndexComponent
            },
            {
                path: 'new',
                component: ManagerNewComponent
            },
            {
                path: ':id',
                component: ManagerShowComponent
            },
            {
                path: 'edit:id',
                component: ManagerEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ManagersRoutingModule { }