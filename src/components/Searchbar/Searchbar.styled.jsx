import styled from '@emotion/styled';

export const Form = styled.form`
  width: 600px;
  height: 55px;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 350px;
  height: 100%;
  padding-left: 8px;

  font-size: 24px;

  border-radius: 4px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-color: #3392b1;
  background: rgba(33, 150, 243, 0);
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: #e00480;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 100%;

  font-size: 32px;

  color: #ffffff;
  background: #3392b1;

  border-radius: 4px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  border: none;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
