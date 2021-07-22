import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function List({ items }) {
  const { locale } = useRouter();
  items.map((item) => {
    item.fields.title = locale === "ja-JP" ? item.fields.title : item.fields.etitle;
  });

  return (
    <>
      {items.map((item) => (
        <div key={item.sys.id} className="grid grid-cols-7 my-4 mx-3 items-center">
          <p className="py-1 mx-1 bg-gray-200 text-center">{item.fields.date}</p>
          <p className="col-span-6 py-1 mx-2">
            <Link as={`/topics/${item.sys.id}`} href="/topics/[item.sys.id]">
              <a className="text-blue-600 hover:underline">{item.fields.title}</a>
            </Link>
          </p>
        </div>
      ))}
    </>
  );
}

export default List;
