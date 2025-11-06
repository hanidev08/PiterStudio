import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@prismicio/react";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("image", uid).catch(() => notFound());

  const images = [
    page.data.image,
    page.data.imageone,
    page.data.imagetow,
    page.data.imagethree,
    page.data.imagefour,
    page.data.imagefive,
  ];

  return (
    <div className=" px-3 md:px-5 pb-3 md:pb-5">
      <div className="grid grid-cols-4 md:grid-cols-12 relative md:items-start">
        <div className=" order-2 md:order-1 col-span-4 flex flex-col md:col-span-6 gap-3 md:gap-5 max-md:mt-[50px]">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-5/5 md:aspect-4/5 max-w-[720px] w-full  md:w-[49vw]"
            >
              <PrismicNextImage
                field={img}
                fill
                alt=""
                className="object-cover max-md:object-top"
              />
            </div>
          ))}
        </div>
        <div className=" order-1 md:order-2 col-span-4 md:col-start-10 md:col-end-12 flex flex-col gap-[50px] md:sticky md:top-5">
          <div className=" uppercase text-xl leading-[23px] font-display  max-md:max-w-[300px]">
            <PrismicRichText field={page.data.title} />
          </div>
          <div className="text-[18px] leading-[21px] font-display">
            <PrismicRichText field={page.data.body} />
          </div>

          <div className=" uppercase text-xl leading-[23px] font-display">
            <h1>Location:</h1>
            <PrismicRichText field={page.data.location} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("image", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("image");

  return pages.map((page) => ({ uid: page.uid }));
}
