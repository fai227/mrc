function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <p key={item.sys.id} className="my-4">
          <span className="px-2 py-1 mx-3 bg-gray-200">{item.fields.date}</span>
          <a href="/" className="text-blue-600 hover:underline">
            {item.fields.title}
          </a>
        </p>
      ))}
    </>
  );
}

export default List;
