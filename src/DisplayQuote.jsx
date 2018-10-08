import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <img  src={quote.image}  alt="picture"  />
            <ul>
                <li>{quote.character}</li>
                <li>{quote.quote}</li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;