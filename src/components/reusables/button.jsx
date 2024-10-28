import Link from "next/link";

export default function Button({ link, text, className = "" }) {
  return (
    <Link
      type="button"
      href={link}
      className={`inline-flex justify-center items-center gap-x-2 px-8 py-4 btn text-base lg:text-lg shrinkAnimation transition3 ${className}`}
    >
      {text}
    </Link>
  );
}
