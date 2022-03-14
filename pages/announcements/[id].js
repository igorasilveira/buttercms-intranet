import camelcaseKeys from "camelcase-keys";
import ErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { getAllAnnouncements, getAnnouncement } from "../../lib/butter";

export default function AnnouncementPage({ announcement }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!announcement) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/" />
      </Head>

      <main>
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none space-y-6">
              <div className="space-y-1">
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {announcement.title}
                </h1>
                <p className="text-lg text-gray-600">{announcement.subtitle}</p>
              </div>
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 shadow-md">
                <Image
                  layout="fill"
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const announcements = await getAllAnnouncements();

  return {
    paths: announcements.map(({ meta: { id } }) => ({
      params: { id: id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const announcement = await getAnnouncement(params.id);
    console.log(announcement);

    return { props: { announcement: camelcaseKeys(announcement) } };
  } catch (e) {
    console.error(`Couldn't load content for Announcement ${params.id}.`, e);

    return {
      notFound: true,
    };
  }
}
