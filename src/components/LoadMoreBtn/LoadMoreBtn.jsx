import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
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
