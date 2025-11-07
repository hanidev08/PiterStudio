import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
 import { Bounded } from "@/components/Bounded";
 import "./style.scss";
import { Links } from "@/components/Links";
 
export default async function Page() {
  const client = createClient();
  const studio = await client.getSingle("studio").catch(() => notFound());

  return (
    <Bounded className="pt-[150px] md:pt-[246px] pb-3 md:pb-5">
      <div className="headingStudio indent-[165px] md:indent-[370px] font-sans  tracking-tight">
        <PrismicRichText field={studio.data.description} />
      </div>
      <div className=" grid grid-cols-1 items-start md:grid-cols-12 max-md:gap-y-10 mt-[100px] md:mt-[125px] font-display">
        <div className="aboutStudio col-span-1 md:col-span-3 uppercase">
          {studio.data.eyebrow}
        </div>
        <div className="aboutStudio col-span-1 md:col-span-5">
          <PrismicRichText field={studio.data.body} />
        </div>
      </div>
      <Links />
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("studio").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
