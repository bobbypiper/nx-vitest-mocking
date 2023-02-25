import { mockable } from "@nx-vitest-mocking/library-one";

export function libraryTwo(): string {
  return mockable();
}
