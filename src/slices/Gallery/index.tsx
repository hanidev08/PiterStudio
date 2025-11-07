import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { ImageDisplay } from "./ImageDisplay";
 
/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */

const Gallery: FC<GalleryProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" pt-[150px] md:pt-[246px]"
    >
      {/* <Loader /> */}

      <div className=" max-md:grid max-md:grid-cols-4">
        <div className=" max-md:col-span-2 font-display flex  flex-col md:hidden">
          <span>Gallery</span>
          <span className=" opacity-50">Index</span>
        </div>
        <div className=" max-md:col-span-2 font-display flex  flex-col md:hidden">
          Creative Studio
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-12 md:gap-x-5 gap-y-[70px] md:gap-y-[100px] max-md:mt-[150px]">
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
