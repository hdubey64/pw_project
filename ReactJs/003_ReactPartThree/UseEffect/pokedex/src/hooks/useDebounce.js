function useDebounce(cb, delay = 2000) {
   let timerId;
   return (...args) => {
      clearTimeout(timerId);
      console.log("test", ...args);
      timerId = setTimeout(() => {
         cb(...args);
      }, delay);
   };
}

export default useDebounce;
