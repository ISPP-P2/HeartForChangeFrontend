
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


class Activity {
    constructor(id, name, description, type, location,capacity,date) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.type = type;
      this.location = location;
      this.capacity = capacity;
      this.date = date;
    }

  }

  export default Activity;