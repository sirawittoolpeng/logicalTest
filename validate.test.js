const validate = require("./validate");

/**
 * LENGTH
 */
test("An input's length has to be equal or greater than 6 (1)", () => {
  expect(validate(17283)).toBe(false);
});
test("An input's length has to be equal or greater than 6 (2)", () => {
  expect(validate(172839)).toBe(true);
});

/**
 * DUPLICATE NUMBER
 */
test("An input can't contain more than 2 duplicate numbers (1)", () => {
  expect(validate(111822)).toBe(false);
});
test("An input can't contain more than 2 duplicate numbers (2)", () => {
  expect(validate(112762)).toBe(true);
});

/**
 * SEQUENTIAL
 */
test("An input can't contain more than 2 sequential numbers (1)", () => {
  expect(validate(123743)).toBe(false);
});
test("An input can't contain more than 2 sequential numbers (2)", () => {
  expect(validate(321895)).toBe(false);
});
test("An input can't contain more than 2 sequential numbers (3)", () => {
  expect(validate(124578)).toBe(true);
});

/**
 * DUPLICATE SET
 */
test("An input can't contain more than 2 duplicate sets of number (1)", () => {
  expect(validate(112233)).toBe(false);
});
test("An input can't contain more than 2 duplicate sets of number (2)", () => {
  expect(validate(882211)).toBe(false);
});
test("An input can't contain more than 2 duplicate sets of number (3)", () => {
  expect(validate(887712)).toBe(true);
});


/**
 * MY CUSTOM CASE
 */
test("012384950 should be invalid", () => {
    expect(validate("012384950")).toBe(false);
  });
test("0142384210 should be invalid", () => {
    expect(validate("0142384210")).toBe(false);
  });

  /**
   * ADD TEST(S) BELOW
   */