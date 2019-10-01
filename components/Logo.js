import Link from "next/link";

const Logo = () => (
  <div className="Logo">
    <Link href="/">
      <a>
        <img src="/static/android-chrome-192x192.png" />
      </a>
    </Link>
  </div>
);

export default Logo;
