import Head from 'next/head';

export default function Layout({
  children,
  title = 'Default title',
}) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
      <footer>@2021 12</footer>
    </div>
  );
}
