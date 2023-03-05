
export class CustomList {
    constructor(list = null){
      this.list = list
    }

    parseToTable(header = null, information = null, headerInformation = null, details = null){
        if(header === null && information === null){
          console.log("faltan cosas")
          return null
        }

        let list = this.list.map((value)=> {
          let informationParsed = information.map((info, i)=> {
              return value[info]
          })
          if(details !== null && headerInformation !== null){
            let detailsParsed = details.map((info, i)=> {
              return value[info]
            })
            let aux = {
              header: headerInformation,
              items: detailsParsed
            }
            informationParsed.push(aux)
          }
          return informationParsed
        })
        return {
            header: header,
            items: list,
            details: headerInformation !== null && details !== null
        }
    }


}


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