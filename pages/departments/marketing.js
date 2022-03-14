import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import camelcaseKeys from "camelcase-keys";

import { getDepartmentPage } from "../../lib/butter";
import HeroHeader from "../../components/HeroHeader";
import Image from "next/image";

export default function MarketingPage({ page }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{page.fields.seo.title}</title>
        <meta name="description" content={page.fields.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/" />
      </Head>

      <main>
        <HeroHeader
          title={
            <>
              <p className="block">Department</p>
              <p className="block text-indigo-600">
                {page.fields.hero.headline}
              </p>
            </>
          }
          subtitle={page.fields.hero.subheadline}
          buttonLabel={page.fields.hero.button_label}
          buttonAnchor={page.fields.hero.scroll_anchor_id}
          image={page.fields.hero.image}
        />
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900 underline decoration-indigo-400 underline-offset-2 decoration-4">
                {page.fields.company_description.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: page.fields.company_description.content,
                }}
                className="mt-6 space-y-2"
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900 underline decoration-indigo-600 underline-offset-2 decoration-4">
                Press Kit
              </h2>
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {page.fields.press_kit.map(({ name, image }, index) => (
                  <div key={index} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <Image
                        layout="fill"
                        src={image}
                        alt={name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-base text-gray-500">
                      <span className="absolute inset-0" />
                      {name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const page = await getDepartmentPage("marketing");

    return { props: { page: camelcaseKeys(page) } };
  } catch (e) {
    console.error(`Couldn't load content for Department page 'marketing'.`, e);

    return {
      notFound: true,
    };
  }
}
