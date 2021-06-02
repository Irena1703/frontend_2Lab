export default class User {
  constructor(name, email, password, gender, birth) {
    this.birth = birth;
    this.email = email;
    this.name = name;
    this.gender = gender;
    this.password = btoa(password);
  }
}
