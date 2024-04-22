import { Link } from "react-router-dom";

export default function PostCardHome({ post }) {
  return (
    <div className="w-full h-[550px] overflow-hidden rounded-sm sm:w-[480px] transition-all block">
      <img
        src={post.image}
        alt="post cover"
        className="h-[320px] w-full z-20 duration-300 transition-all"
      />
      <div className="flex flex-col gap-2 font-fifth pt-3">
        <p className="text-sm font-normal text-gray-600">{post.category}</p>
        <p className="text-lg font-semibold">{post.title}</p>
      </div>
    </div>
  );
}
