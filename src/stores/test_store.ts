import { observable, action, configure } from "mobx";
configure({
  enforceActions: "always"
});

export interface ITestStore {
  count: number;
  addAction():void;
  subtractAction():void;
}

export class TestStore implements ITestStore {
  @observable count = 0;
  @action
  addAction = () => {
    this.count += 1;
  };

  @action
  subtractAction = () => {
    this.count -= 1;
  };
}
