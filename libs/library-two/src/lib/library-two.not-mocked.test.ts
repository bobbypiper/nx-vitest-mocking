import { mockable, notMockable } from "@nx-vitest-mocking/library-one";
import { expect, it } from "vitest";

it('asserts that none of the modules are mocked or have the property mockName', () => {
  // mockable method
  expect(mockable).not.toHaveProperty('mockName');
  expect(mockable()).toBe('not mocked');

  // not mockable method
  expect(notMockable()).toBe('not ever mocked');
  expect(notMockable).not.toHaveProperty('mockName');
})

