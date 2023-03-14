
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


class Beneficiary {
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

  export default Beneficiary;