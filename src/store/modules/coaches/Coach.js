export default class Coach {
  constructor(firstName, lastName, areas, description, hourlyRate) {
    this.id = Math.floor(Math.random() * 100);
    this.firstName = firstName;
    this.lastName = lastName;
    this.areas = areas;
    this.description = description;
    this.hourlyRate = hourlyRate;
  }
}
