export class Chat {
    id: number;
    senderId: number;
    receiverId: number;
    message: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, senderId: number, receiverId: number, message: string) {
        this.id = id;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.message = message;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    updateMessage(newMessage: string) {
        this.message = newMessage;
        this.updatedAt = new Date();
    }
    updateSenderId(newSenderId: number) {
        this.senderId = newSenderId;
        this.updatedAt = new Date();
    }
    updateReceiverId(newReceiverId: number) {
        this.receiverId = newReceiverId;
        this.updatedAt = new Date();
    }
    updateCreatedAt(newCreatedAt: Date) {
        this.createdAt = newCreatedAt;
    }
    updateUpdatedAt(newUpdatedAt: Date) {
        this.updatedAt = newUpdatedAt;
    }
    getId() {
        return this.id;
    }
    getSenderId() {
        return this.senderId;
    }
    getReceiverId() {
        return this.receiverId;
    }
    getMessage() {
        return this.message;
    }
}
