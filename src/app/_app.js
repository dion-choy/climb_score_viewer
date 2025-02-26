import "@/globals.css"; // Ensure global styles are loaded
import Layout from "@/components/layout"; // Import the Layout component

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
