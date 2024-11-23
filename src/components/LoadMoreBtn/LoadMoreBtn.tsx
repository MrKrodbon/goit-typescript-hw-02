import React from "react";
import css from "./LoadMoreBtn.module.css";
import { onLoadMoreProps } from "./LoadMore.types";

const LoadMoreBtn = ({ onLoadMore }: onLoadMoreProps) => {
  const onLoadMoreHandle = () => {
    onLoadMore();
  };

  return (
    <button className={css.loadMoreBtn} onClick={onLoadMoreHandle}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
