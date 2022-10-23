import styled from "styled-components";

export const SearchFormButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.ml};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.sizes.searchForm};
  background-color: #fff;
  border-radius: ${p => p.theme.radii.searchForm};
  overflow: hidden;
`;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  border: ${p => p.theme.borders.normal};
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  :placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;