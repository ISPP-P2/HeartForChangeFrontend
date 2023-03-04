
class User {
    constructor(id,username, name, surname, email, age,role,avatarImage, activityHistory = []) {
      this.id = id;
      this.username = username;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.age = age;
      this.role = role;
      this.avatarImage = avatarImage;
      this.activityHistory = activityHistory;
    }

  }
  const users = [
    new User(1,"pabloben","pablo","Benitez","pablobenitez@gmail.com","10","Voluntario","https://randomuser.me/api/portraits/women/20.jpg", [{
      date: "2-02-2023",
      activityName: "Actividad de prueba"
    },
    {
      date: "2-04-2023",
      activityName: "Actividad de prueba 2"
    }]),
    new User(2,"mariorey","Mario","Rey","mariorey@gmail.com","23","Voluntario","https://randomuser.me/api/portraits/women/22.jpg"),
    new User(3,"andreumontagut","Andreu","Montagut","andreu@gmail.com","38","Administrador","https://randomuser.me/api/portraits/women/21.jpg"),
    new User(4,"pacoben","Paco","Benitez","pablobenitez@gmail.com","10","Voluntario","https://randomuser.me/api/portraits/women/24.jpg"),
    new User(5,"manuelmejor","Manolo","Rey","mariorey@gmail.com","23","Voluntario","https://randomuser.me/api/portraits/men/22.jpg"),
    new User(6,"antonito","Antonio","Montagut","andreu@gmail.com","38","Administrador","https://randomuser.me/api/portraits/men/23.jpg")
  ];

  export default users;