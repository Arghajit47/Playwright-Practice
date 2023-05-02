/* eslint-disable no-unused-vars */
// 1. import the test and alias it as baseTest
// 2. Declare the type for the type myfixtureType. Can have multiple values
// 3. Create another var called fixture, using baseTest extend to the generic type
// myfixtureType
//
import { test as baseTest } from "@playwright/test";

type myfixtureType = {
  validEmailId: string;
  validPassword: string;
  inValidEmailId: string;
  inValidPassword: string;
};

const fixture = baseTest.extend<myfixtureType>({
  validEmailId: "arghajitsingha47+user+admin@gmail.com",
  validPassword: "Asughan4711",
  inValidEmailId: "arghajitsingha47+user@gmail.com",
  inValidPassword: "Arghaj11",
});
// This fixture is the actual "test" from playwright test (line number 2)
export const test = fixture;
export const assert = fixture.expect;
