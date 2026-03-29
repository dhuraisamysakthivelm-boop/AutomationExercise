import { faker } from '@faker-js/faker';

export class RandomDataUtil {

  static async getTitle() {
    const { faker } = await import('@faker-js/faker');
    return faker.helpers.arrayElement(["Mr.", "Mrs."]);
  }

  static async getPassword(): Promise<string> {
    const { faker } = await import('@faker-js/faker');
    return faker.internet.password();
  }

  static async getBirthday() {
    const { faker } = await import('@faker-js/faker');
    return faker.date.birthdate();
  }

  static async getFirstName() {
    const { faker } = await import('@faker-js/faker');
    return faker.person.firstName();
  }

  static async getlastName() {
    const { faker } = await import('@faker-js/faker');
    return faker.person.lastName();
  }

  static async getcompany() {
    const { faker } = await import('@faker-js/faker');
    return faker.company.name();
  }

  static async getAddress(): Promise<string> {
    const { faker } = await import('@faker-js/faker');
    return faker.location.streetAddress();
  }

  static async getCountry(): Promise<string> {
    const { faker } = await import('@faker-js/faker');
    return faker.helpers.arrayElement(["India", "United States","Canada", "Australia","Israel","New Zealand","Singapore"]);
  }

  static async getState(): Promise<string> {
    const { faker } = await import('@faker-js/faker');
    return faker.location.state();
  }

  static async getCity(): Promise<string> {
    const { faker } = await import('@faker-js/faker');
    return faker.location.city();
  }

  static async getZipcode(): Promise<string> {
    const { faker } = await import('@faker-js/faker');
    return faker.location.zipCode();
  }

  static async getPhoneNumber() {
    const { faker } = await import('@faker-js/faker');
    return faker.phone.number();
  }
  
  static async getUserName(){
    const { faker } = await import('@faker-js/faker');
    return faker.person.fullName();
  }

  static async getEmail(){
    const { faker } = await import('@faker-js/faker');
    return faker.internet.email();
  }
  
}