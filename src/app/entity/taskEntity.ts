export class taskEntity {
  text: String = "";
  id: Number;
  completed: Boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
