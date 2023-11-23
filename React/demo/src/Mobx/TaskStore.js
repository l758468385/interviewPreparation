import { observable, action } from 'mobx';

export default class TaskStore {
  @observable taskList = null;

  @action.bound queryAllTaskAction() { }

  @action.bound removeTaskAction() { }


}