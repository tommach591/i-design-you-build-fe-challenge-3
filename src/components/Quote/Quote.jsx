import "./Quote.css";

function Quote({ isMobile }) {
  function getMobile() {
    return <div className="Quote">Mobile</div>;
  }

  function getWeb() {
    return (
      <div className="Quote">
        <div className="QuoteContents">
          <h1>Get your quotation today</h1>
        </div>
        <div className="QuoteButton QuoteMe">
          <h2>Quote me</h2>
        </div>
        <div className="QuoteButton ContactSales">
          <h2>Contact Sales</h2>
        </div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default Quote;
