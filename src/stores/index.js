import SessionStore from "./sessionStore";
import UserStore from "./userStore";
import MessageStore from "./messageStore";

class RootStore {
    constructor() {
        this.userStore = new UserStore(this);
        this.sessionStore = new SessionStore(this);
        this.messageStore = new MessageStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
