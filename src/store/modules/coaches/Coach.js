export default class Coach {
  constructor(id, firstName, lastName, description, hourlyRate, areas) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.areas = areas;
    this.description = description;
    this.hourlyRate = hourlyRate;
  }
}
