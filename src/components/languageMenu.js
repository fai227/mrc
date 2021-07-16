import Link from "next/link";

export default function LanguageMenu({ ja, en }) {
  return (
    <>
      <p className="mx-2 my-4 text-right">
        <Link href={ja}>
          <a className="underline hover:no-underline">日本語</a>
        </Link>{" "}
        /{" "}
        <Link href={en}>
          <a className="underline hover:no-underline">English</a>
        </Link>
      </p>
    </>
  );
}
