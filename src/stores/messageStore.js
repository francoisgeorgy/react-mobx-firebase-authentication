import {observable, action, computed, makeAutoObservable} from 'mobx';

class MessageStore {

    rootStore = null;
    messages = null;
    limit = 5;

    constructor(rootStore) {
        makeAutoObservable(this, {
            rootStore: false,
            setMessages: action,
            setLimit: action,
            messageList: computed
        });
        this.rootStore = rootStore;
    }

    setMessages = messages => {
        this.messages = messages;
    };

    setLimit = limit => {
        this.limit = limit;
    };

    get messageList() {
        return Object.keys(this.messages || {}).map(key => ({
            ...this.messages[key],
            uid: key,
        }));
    }
}

export default MessageStore;
