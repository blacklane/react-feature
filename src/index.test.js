/* eslint-env jest */
import React from "react";
import TestRenderer from "react-test-renderer"; // ES6
import { Feature } from "./index";

describe("<Feature>", () => {
  it("should render feature content if feature active", () => {
    const wrapper = TestRenderer.create(
      <Feature name="test:feature" config={{ "test:feature": true }}>
        <p>content</p>
      </Feature>
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
<p>
  content
</p>
`);
  });

  it("should render feature content with multiple children if feature active", () => {
    const wrapper = TestRenderer.create(
      <Feature name="test:feature" config={{ "test:feature": true }}>
        <p>content 1</p>
        <p>content 2</p>
      </Feature>
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
Array [
  <p>
    content 1
  </p>,
  <p>
    content 2
  </p>,
]
`);
  });

  it("should not render feature content if feature not active", () => {
    const wrapper = TestRenderer.create(
      <Feature name="test:feature" config={{ "test:feature": false }}>
        <p>content</p>
      </Feature>
    );
    expect(wrapper.toJSON()).toBe(null);
  });

  it("should not render feature content if config empty", () => {
    const wrapper = TestRenderer.create(
      <Feature name="test:feature" config={{}}>
        <p>content</p>
      </Feature>
    );
    expect(wrapper.toJSON()).toBe(null);
  });
});
