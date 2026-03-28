import { faker } from '@faker-js/faker';

export class RandomDataUtil {

  static getTitle() {
    return faker.helpers.arrayElement(["Mr.", "Mrs."]);
  }

  static getPassword(): string {
    return faker.internet.password();
  }

  static getBirthday() {
    return faker.date.birthdate()

  }

  static getFirstName() {
    return faker.person.firstName();

  }

  static getlastName() {
    return faker.person.lastName();

  }


  static getcompany() {
    return faker.company.name()

  }

  static getAddress(): string {
    return faker.location.streetAddress()

  }

  static getCountry(): string {
    return faker.helpers.arrayElement(["India", "United States","Canada", "Australia","Israel","New Zealand","Singapore"])

  }

  static getState(): string {
    return faker.location.state()

  }

  static getCity(): string {
    return faker.location.city()

  }

  static getZipcode(): string {
    return faker.location.zipCode()

  }

  static getPhoneNumber() {
    return faker.phone.number();

  }
  
  static getUserName(){
    return faker.person.fullName()
  }

  static getEmail(){
    return faker.internet.email()
  }
  
}