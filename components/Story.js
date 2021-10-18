function Story({ img, username }) {
  return (
    <div>
      <img
        className="rounded-full 
      p-[1.5px]
      border-red-500 border-2
      object-contain
      cursor-pointer
      h-14 w-14
      hover:scale-110 trasnition transform duration-200 ease-out
      "
        src={img}
        alt="avatar"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}

export default Story;
