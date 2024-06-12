import './styles.css';

export const TextScroller = ({ text }) => {
  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
          <h1>{text}</h1>
      </div>
    </div>
  );
};
