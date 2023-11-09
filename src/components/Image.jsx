import { AiFillHeart } from "react-icons/ai";

function Image({ data }) {
  return (
    <a href={data.urls.regular}>
      <div className="card bg-base-400 shadow-lg w-150 pb-7 hover:scale-105 transition duration-300 text-center">
        <img
          className="h-60 w-full object-cover rounded-lg shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
        />
        
      </div>
    </a>
  );
}

export default Image;
