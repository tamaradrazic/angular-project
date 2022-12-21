export class Patient {
    id: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
    email: string | undefined;
    weight: number | undefined;
    height: number | undefined;

    Patient (id: number, firstName: string, lastName: string, age: number, email: string, weight: number, height: number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.weight = weight;
        this.height = height;
    }
}
