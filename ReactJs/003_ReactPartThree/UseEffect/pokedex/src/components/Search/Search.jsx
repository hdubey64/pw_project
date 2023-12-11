import "./Search.css";

const Search = ({ updateSerchTerm }) => {
   return (
      <div className="searchWrapper">
         <input
            type="text"
            id="pkemonNameSearch"
            placeholder="Pokemon Name"
            onChange={(e) => updateSerchTerm(e.target.value)}
         />
      </div>
   );
};

export default Search;
