export class Password {
    id: number;
    category: string;
    app: string;
    userName: string;
    encryptedPassword: string;
  
    constructor(id : number, category: string, app: string, userName: string, encryptedPassword: string) {
        this.id = id;
      this.category = category;
      this.app = app;
      this.userName = userName;
      this.encryptedPassword = encryptedPassword;
    }
  }
  