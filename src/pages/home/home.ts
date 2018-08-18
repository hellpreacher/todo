import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { ArchivedTodosPage } from '../../pages/archived-todos/archived-todos'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    reorderIsEnabled: boolean = false;
    archivedTodosPage = ArchivedTodosPage;

    constructor(public navCtrl: NavController, private alertController: AlertController, private _tp: TodoProvider, private toastCtrl: ToastController) {}

    toggleReorder() {
        this.reorderIsEnabled = !this.reorderIsEnabled
    }

    itemReordered($event) {
        reorderArray(this._tp.getTodos, $event)
    }

    editTodo(index) {
        let editTodoPopup = this.alertController.create({
            title: 'Edit Todo',
            message: 'Enter new name for todo.',
            inputs: [
                { type: 'text', name: 'editTodoInput' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Update',
                    handler: (inputDate) => {
                        let todoText = inputDate.editTodoInput
                        this._tp.editTodo(index, todoText)

                        editTodoPopup.onDidDismiss(() => {
                            this.toastCtrl.create({
                                message: 'Todo updated',
                                duration: 3000,
                                showCloseButton: true,
                                closeButtonText:'Hide'
                            }).present()
                        })
                    }
                }
            ]
        })

        editTodoPopup.present()
    }

    openTodoAlert() {
        let addTodoAlert = this.alertController.create({
            title: 'Add A Todo',
            message: 'Enter your todo',
            inputs: [
                {
                    type: 'text',
                    name: 'addTodoInput'
                }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Add Todo',
                    handler: (inputData) => {
                        let todoText = inputData.addTodoInput
                        this._tp.addTodo(todoText)
                        
                        addTodoAlert.onDidDismiss(() => {
                            this.toastCtrl.create({
                                message: 'Todo added to list.',
                                duration: 3000,
                                showCloseButton: true,
                                closeButtonText: 'Hide'
                            }).present()
                        })
                    }
                }
            ]
        })

        addTodoAlert.present()
    }

    archiveTodo(index) {
        this._tp.archiveTodo(index);
    }

    goToArchivePage() {
        this.navCtrl.push(ArchivedTodosPage)
    }
}