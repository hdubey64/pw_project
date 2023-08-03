const Image = () => {
   return (
      <div>
         <img src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg" />
         <img src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg" />{" "}
         <img src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg" />
      </div>
   );
};

const DogCard = () => {
   return (
      <div>
         <h3>Tommy</h3>
         <Image />
         <Image />
      </div>
   );
};

export default DogCard;
