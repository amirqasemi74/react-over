import { Effect, StorePart } from "@react-store/core";

@StorePart()
export default class FormValidator {
  hasAnyError = false;

  constructor(private form: any) {}

  @Effect()
  onErrorChange() {}

  async validate() {
    await new Promise((res) => res(1));
    this.hasAnyError = !this.form.value;
  }
}
