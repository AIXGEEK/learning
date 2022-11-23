import { observable, computed } from "mobx";

class AppStore {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}

export default AppStore