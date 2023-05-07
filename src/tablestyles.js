import styled from "styled-components";
import { btnReset, v } from "./styles/variables";

export const Main = styled.main`
  .table {
    position: fixed;
    left: 25%;
    padding-left:100px;
  }
  * {
    font-size: 12px;
  }
  table {
    border-radius: 0.2rem;
    border: 1rem hidden #443c68;
    border-collapse: collapse;
    box-shadow: 0 0 0 1px black;
    overflow: hidden;
  }

  li,
  p,
  a,
  td {
    line-height: 1.6;
  }

  thead {
    background-color: #443c68;
    color: #fff;
  }

  th,
  td {
    border: 1px solid #443c68;
    min-width: max-content;
    padding: 1rem;
    line-height: 1.7;
  }

  td {
    background: ${({ theme }) => theme.bg4};
  }
`;

export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 12px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 15px;
  }
`;

export const Wrapper = styled.div`
  padding-left:45px;
  padding-bottom: 25px;
  padding-top : 25px;
`;
