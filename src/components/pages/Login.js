import React, { useState } from "react";
import { PageLayout, Input } from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1x solid #eee;
  box-sizing: border-box;
  padding: 16px;
  color: black;
  border-radius: 4px;
`;


export default () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.password,
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleInputChange}
          value={formFields.username}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={formFields.password}
        />
      </Form>
    </PageLayout>
  );
};
