import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white font-normal h-14 w-ful flex justify-between items-center mx-auto px-32">
      <Link href="/">LOGO</Link>
      <nav>
        <ul className="flex justify-between gap-4 w-96">
          <li className="">
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/">LOG</Link>
          </li>
          <li>
            <Link href="/">開発者について</Link>
          </li>
          <li>
            <Link href="/">サイト履歴</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex justify-between gap-4">
          <li>ログイン</li>
          <li>会員登録</li>
        </ul>
      </nav>
    </header>
  );
}
