// validation
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  const inputVal = validatableInput.value;
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && inputVal.toString().trim().length !== 0;
  }
  if (validatableInput.minLength != null && typeof inputVal === 'string') {
    isValid = isValid && inputVal.length >= validatableInput.minLength;
  }
  if (validatableInput.maxLength != null && typeof inputVal === 'string') {
    isValid = isValid && inputVal.length <= validatableInput.maxLength;
  }
  if (validatableInput.min != null && typeof inputVal === 'number') {
    isValid = isValid && inputVal >= validatableInput.min;
  }
  if (validatableInput.max != null && typeof inputVal === 'number') {
    isValid = isValid && inputVal <= validatableInput.max;
  }

  return isValid;
}
