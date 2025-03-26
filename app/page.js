import Image from "next/image";
import heroImage from "../public/nextjs.png";

export default function Home() {
  return (
    <div>
      <main className="grid">
        <Image
        src={heroImage}
        alt= "Afbeelding van Next.js"
        width= {700}
        height= {400}
        />
        <div className="welcome">
          <h2>Introduction to Next.js</h2>
          <p>
            Next.js is a React framework that enables server-side rendering,
            static site generation, and full-stack capabilities for building
            modern web applications. It offers features like API routes, image
            optimization, and built-in routing, making development more
            efficient. With its performance optimizations and seamless
            integration with backend services, Next.js is widely used for
            scalable and SEO-friendly web projects.
          </p>
        </div>
        <h2>Key Features</h2>
        <div class="card">
          <h3>Server-Side Rendering (SSR) & Static Site Generation (SSG)</h3>
          <p>
            SSR dynamically renders pages on each request, improving SEO and
            ensuring fresh data. This is useful for applications that need
            up-to-date content, like news websites.
          </p>
          <p>
            SSG pre-renders pages at build time, making them faster and more
            efficient. It's ideal for blogs, e-commerce, and landing pages where
            content doesn’t change frequently.
          </p>
        </div>
        <div class="card">
          <h3>API Routes & Built-in Backend Functionality</h3>
          <p>
            Next.js allows you to create backend API endpoints within the
            project using serverless functions. These endpoints can handle
            database queries, authentication, and other backend tasks.
          </p>
          <p>
            This eliminates the need for a separate backend service, simplifying
            deployment and maintenance. API routes are highly scalable and work
            seamlessly with frontend components.
          </p>
        </div>
        <div class="card">
          <h3>Automatic Code Splitting & Optimization</h3>
          <p>
            Next.js automatically splits JavaScript bundles so users load only
            what's needed for a specific page.
          </p>
          <p>
            This reduces initial load times and improves user experience. It
            also optimizes assets like images and scripts, ensuring faster
            performance. Features like lazy loading and caching enhance
            efficiency further.
          </p>
        </div>
      </main>
    </div>
  );
}
