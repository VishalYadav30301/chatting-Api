export class Auth {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(id: number, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
