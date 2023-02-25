import { mockable, notMockable } from "@nx-vitest-mocking/library-one";
import { mockable as mockableMock } from "@nx-vitest-mocking/library-one/mocks";
import { expect, it, vi } from "vitest";

vi.mock('@nx-vitest-mocking/library-one');

it('asserts that modules that have an available mock are mocked, whilst leaving the original modules unmodified', () => {

  // mockable method - here we are able to use the mockableMock to
  // access the underlying mock and overload/target the returned value
  expect(mockable).toHaveProperty('mockName');
  mockableMock.mockReturnValue('here is an inline mock');
  expect(mockable()).toBe('here is an inline mock');

  // not mockable method
  expect(notMockable).not.toHaveProperty('mockName');
  expect(notMockable()).toBe('not ever mocked');
})

