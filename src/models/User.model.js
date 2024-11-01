export class User
{
    constructor(name,email,password)
    {
        this.id = user_id_avail++;
        this.name=name;
        this.email=email;
        this.password = password;
    }
    static addNewUser(name, email, password)
    {
        usersList.push(new User(name,email,password));
    }
    static isValidUser(email, password)
    {
        return Boolean(usersList.find((user) => {
            return email == user.email && password == user.password;
        }));
    }
    static getUserId(email, password) //assumming email and password are always valid user
    {
        return usersList.find((user) => user.email == email && user.password == password).id;
    }
}

let user_id_avail = 1; 

const usersList = [
    new User('Gaurav Lasyal', 'lasyalgaurav@gmail.com', '1234'),
    new User('Subham Lasyal','lasyalsubham@gmail.com','5678')
];