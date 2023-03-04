
class User {
    constructor(id, name, surname, email, year,role,avatarImage) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.year = year;
      this.role = role;
      this.avatarImage = avatarImage;
    }

  }
  const users = [
    new User(1,"pablo","Benitez","pablobenitez@gmail.com",10,"Voluntario","https://randomuser.me/api/portraits/women/20.jpg"),
    new User(2,"Mario","Rey","mariorey@gmail.com",23,"Voluntario","https://randomuser.me/api/portraits/women/22.jpg"),
    new User(3,"Andreu","Montagut","andreu@gmail.com",38,"Administrador","https://randomuser.me/api/portraits/women/21.jpg")
  ];

  export default users;