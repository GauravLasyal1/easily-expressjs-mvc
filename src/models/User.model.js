class User
{
    constructor(name,email,password)
    {
        this.id = user_id_avail++;
        this.name=name;
        this.email=email;
        this.password = password;
    }
}

let user_id_avail = 1; 

const usersList = [
    new User('Gaurav Lasyal', 'lasyalgaurav@gmail.com', '1234'),
    new User('Subham Lasyal','lasyalsubham@gmail.com','5678')
];