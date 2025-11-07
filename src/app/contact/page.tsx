import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import "./style.scss";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

export default async function Page() {
  const client = createClient();
  const contact = await client.getSingle("contact").catch(() => notFound());

  return (
    <Bounded className="pt-[150px] md:pt-[246px] pb-3 md:pb-5">
      <div className=" headingContact indent-[165px] md:indent-[370px] font-sans  tracking-tight">
        <PrismicRichText field={contact.data.description} />
      </div>
      <div className=" grid grid-cols-1 items-start md:grid-cols-12 max-md:gap-y-[30px] mt-[100px] md:mt-[125px] font-display">
        <div className="aboutContact col-span-1 md:col-span-5 uppercase">
          {contact.data.business}{" "}
        </div>
        <div className=" flex flex-col headingContact col-span-1 md:col-span-5 font-sans  tracking-tight gap-[30px] md:gap-[60px]">
          <div className="">
            <PrismicRichText field={contact.data.headingone} />
          </div>
          <div className="">
            <PrismicRichText field={contact.data.headingtow} />{" "}
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 items-start md:grid-cols-12 max-md:gap-y-[30px] mt-[100px] md:mt-[125px] font-display">
        <div className="aboutContact col-span-1 md:col-span-5 uppercase">
          {contact.data.new_york}{" "}
        </div>
        <div className="headingContact col-span-1 md:col-span-5 font-sans  tracking-tight">
          <div className="">
            <PrismicRichText field={contact.data.location} />
          </div>
        </div>
      </div>
       <div className=" grid grid-cols-1 items-start md:grid-cols-12 max-md:gap-y-[30px] mt-[100px] md:mt-[125px] font-display">
        <div className="aboutContact col-span-1 md:col-span-5 uppercase">
          {contact.data.telephone}
        </div>
        <div className="headingContact col-span-1 md:col-span-5 font-sans  tracking-tight">
          <div className="">
            <PrismicRichText field={contact.data.number} />
          </div>
        </div>
      </div>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("contact").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
