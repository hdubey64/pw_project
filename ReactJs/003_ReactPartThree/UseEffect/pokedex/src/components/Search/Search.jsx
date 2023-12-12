import useDebounce from "../../hooks/useDebounce";
import "./Search.css";

const Search = ({ updateSerchTerm }) => {
   const debounceCallBack = useDebounce((e) => updateSerchTerm(e.target.value));
   return (
      <div className="searchWrapper">
         <input
            type="text"
            id="pkemonNameSearch"
            placeholder="Pokemon Name"
            onChange={debounceCallBack}
         />
      </div>
   );
};

export default Search;
