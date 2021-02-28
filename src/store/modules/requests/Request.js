export default class Request {
  constructor(coachId, email, message) {
    this.id = 'r' + Math.floor(Math.random() * 100);
    this.coachId = coachId;
    this.email = email;
    this.message = message;
  }
}
