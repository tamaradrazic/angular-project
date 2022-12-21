export class User{
    id:number;
    username:string;
    password:string;
    email:string;
    firstName:string;
    lastName:string;

    constructor(id:number, username:string, password:string,
        email:string, firstName:string, lastName:string){
            this.id = id;
            this.email = email;
            this.username = username;
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
        }
}