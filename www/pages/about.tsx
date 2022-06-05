import Layout from "../components/Layouts/Layout";
import Link from "next/link";

const AboutPage = (): React.ReactElement => {
  return (
    <Layout>
      <h1 className="font-bold">About</h1>
      <p>Simple Todo app for Django/ Next.js.</p>
      <p>By <Link href="https://github.com/emceelamb"><a className="font-medium hover:text-gray-200">Mark Lam</a></Link></p>
    </Layout>
  )
}

export default AboutPage;