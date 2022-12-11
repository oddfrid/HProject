import Link from "next/link"

export const Footer = () => {
  const url = "/"
  return (
    <footer className="mt-auto flex justify-around bg-slate-200 h-40 p-8">
      <section className="flex flex-col">
        <h3 className="font-semibold">SiteName</h3>
        <Link href={url} className="my-link my-outline">
          О нас
        </Link>
      </section>
      <section className="flex flex-col">
        <h3 className="font-semibold">SiteName</h3>
        <Link href={url} className="my-link my-outline">
          О нас
        </Link>
      </section>
      <section className="flex flex-col">
        <h3 className="font-semibold">SiteName</h3>
        <Link href={url} className="my-link my-outline">
          О нас
        </Link>
      </section>
      <section className="flex flex-col">
        <h3 className="font-semibold">SiteName</h3>
        <Link href={url} className="my-link my-outline">
          О нас
        </Link>
        <Link href={url} className="my-link my-outline">
          О нас
        </Link>
      </section>
    </footer>
  )
}
