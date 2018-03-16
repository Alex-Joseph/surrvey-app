import Faker from "faker"

const data = {
  qId001 : {
    type : "multiSelect",
    question : "Here you can select more that one option",
    options : {
      aId001 : Faker.lorem.words(),
      aId002 : Faker.lorem.words(),
      aId003 : Faker.lorem.words(),
      aId004 : Faker.lorem.words()
    }
  },
  qId002 : {
    type : "select",
    question : "Here you can only select one option",
    options : {
      aId001 : Faker.lorem.words(),
      aId002 : Faker.lorem.words(),
      aId003 : Faker.lorem.words(),
      aId004 : Faker.lorem.words()
    }
  },
  qId003 : {
    type : "selectTextInput",
    question : "Select yes if you would like to input text",
    options : {
      aId018 : "Yes",
      aId019 : "No",
      aId020 : "Prefer not to say"
    }
  }
}

export default data
