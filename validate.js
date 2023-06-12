class Validator {
  pincode;
  isValid;
  constructor(value) {
    this.pincode = String(value);
    this.isValid = false;
  }

  validate() {
    this._checkLength();
    this._checkDuplicatedNumber();
    this._checkSequentialNumber();
    this._checkDuplicateSet();
    return this.isValid;
  }

  _checkLength() {
    if (this.pincode.length >= 6) {
      this.isValid = true;
      return this;
    } else {
      this.isValid = false;
      throw new Error(`Input's length has to be equal or greater than 6`);
    }
  }

  _checkDuplicatedNumber() {
    let prevNum = this.pincode[0]; // Because we had already checked the length of pincode before
    let maxDupLength = 1;
    for (let i = 1; i < this.pincode.length; i++) {
      if (this.pincode[i] === prevNum) {
        maxDupLength++;
      } else {
        maxDupLength = 1;
        prevNum = this.pincode[i];
      }

      if (maxDupLength > 2) {
        this.isValid = false;
        throw new Error(`An input can't contain more than 2 duplicate numbers`);
      }
    }
    this.isValid = true;
    return this;
  }

  _checkSequentialNumber() {
    for (let i = 1; i < this.pincode.length - 1; i++) {
      // The minimum of sequential numbers to make the pincode invalid is 3
      if (
        this.pincode.charCodeAt(i - 1) - this.pincode.charCodeAt(i) ===
          this.pincode.charCodeAt(i) - this.pincode.charCodeAt(i + 1) &&
        Math.abs(this.pincode.charCodeAt(i - 1) - this.pincode.charCodeAt(i)) === 1
      ) {
        this.isValid = false;
        throw new Error(
          `An input can't contain more than 2 sequential numbers`
        );
      }
    }
    this.isValid = true;
    return this;
  }

  _checkDuplicateSet() {
    let prevNum = this.pincode[0]; // Because we had already checked the length of pincode before
    let dupSet = 0;
    for (let i = 1; i < this.pincode.length; i++) {
      if (this.pincode[i] === prevNum) {
        // Ignore number of duplicated one because we had checked @_checkDuplicatedNumber before
        dupSet++;
      } else {
        prevNum = this.pincode[i];
      }
    }
    if (dupSet > 2) {
      this.isValid = false;
      throw new Error(
        `An input can't contain more than 2 duplicate sets of number`
      );
    }
    this.isValid = true;
    return this;
  }
}

function validatePincode(value) {
  try {
    const validator = new Validator(value);
    return validator.validate();
  } catch (error) {
    console.log("ERROR : ", value, "is invalid ->", error.message);
    return false;
  }
}
module.exports = validatePincode;
