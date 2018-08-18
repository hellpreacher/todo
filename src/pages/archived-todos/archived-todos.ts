import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})

export class ArchivedTodosPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private _tp: TodoProvider) {}

}
