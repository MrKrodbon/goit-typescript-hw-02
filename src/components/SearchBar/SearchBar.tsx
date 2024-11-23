import React from "react";
import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

const notify = () => toast("The input field is empty ");

const SearchBar = ({ onHandleSubmit }: SearchBarProps) => {
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userInput = form.elements.namedItem("text") as HTMLInputElement;
    const trimmedValue = userInput.value.trim();
    if (trimmedValue === "") {
      notify();
      return;
    }
    onHandleSubmit(trimmedValue);

    form.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={onFormSubmit} className={css.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.searchField}
          />
          <button type="submit" className={css.submitBtn}>
            Search
          </button>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 1000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;
