export class Message {
    id: number;
    senderId: number;
    receiverId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, senderId: number, receiverId: number, content: string) {
        this.id = id;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    updateContent(newContent: string) {
        this.content = newContent;
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
    getContent() {
        return this.content;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    setId(id: number) {
        this.id = id;
    }
    setSenderId(senderId: number) {
        this.senderId = senderId;
    }
    setReceiverId(receiverId: number) {
        this.receiverId = receiverId;
    }
    setContent(content: string) {
        this.content = content;
    }
    setCreatedAt(createdAt: Date) {
        this.createdAt = createdAt;
    }
    setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }
}
