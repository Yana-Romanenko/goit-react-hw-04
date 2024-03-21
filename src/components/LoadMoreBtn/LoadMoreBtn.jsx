import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, children, disabled }) => {
return (
    <div className={css.loaderBtn}>
        <button className={css.button} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    </div>
);
}

export default LoadMoreBtn;