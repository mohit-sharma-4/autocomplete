import './style.scss';

const SummaryCard = ({ title, author, summary }) => {
  return (
    <div className='card-container' data-testid='summary-card'>
      <span className='title' data-testid='title'>
        {title}
      </span>
      <p className='summary' data-testid='summary'>
        {summary}
      </p>
      <span className='tag'>-author</span>
      <span className='author' data-testid='author'>
        {author}
      </span>
    </div>
  );
};

export default SummaryCard;
