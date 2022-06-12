import Link from "next/link";

const Layout = ({ children }: any): React.ReactElement => {
  return (
    <div>
      <div className="flex w-full justify-between px-8 py-4 bg-gray-100">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <a>Todo List</a>
          </Link>
        </h1>
        <div className="space-x-8">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
      <div className="p-8 max-w-full mx-auto ">{children}</div>
    </div>
  );
};

export default Layout;
