import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { ImageDisplay } from "./ImageDisplay";
import { Loader } from "@/components/ui/Loader";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */

function LoaderWrapper() {
  return (
    <div>
      <Loader />
    </div>
  );
}
const Gallery: FC<GalleryProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" pt-[150px] md:pt-[204px]"
    >
      <LoaderWrapper />
      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-5 gap-y-[70px] md:gap-y-[100px]">
        {slice.primary.images.map((item) => {
          if (isFilled.contentRelationship(item.image)) {
            return <ImageDisplay key={item.image.id} id={item.image.id} />;
          }
        })}
      </div>
    </Bounded>
  );
};

export default Gallery;
