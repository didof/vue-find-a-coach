export default class Coach {
  constructor(firstName, lastName, description, hourlyRate, areas) {
    this.id = 'c' + Math.floor(Math.random() * 100);
    this.firstName = firstName;
    this.lastName = lastName;
    this.areas = areas;
    this.description = description;
    this.hourlyRate = hourlyRate;
  }
}
