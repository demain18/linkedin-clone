import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import {
  ImageStyled,
  ImageSingleWrap,
  ImageDoubleWrap,
  TimelineImagesStyled,
  ImageWrap,
  ImageTripleWrap,
  ImageTripleDownWrap,
  ImageOverPentaWrap,
  ImageOverPentaCountWrap,
} from "./TimelineImagesStyles";
import img1 from "@/public/images/dummys/toss/one.png";
import img2 from "@/public/images/dummys/toss/two.png";
import img3 from "@/public/images/dummys/toss/three.png";
import img4 from "@/public/images/dummys/toss/four.png";
import img5 from "@/public/images/dummys/toss/five.png";
import Span from "@/components/atoms/typography/span/Span";

export interface Props {
  images?: StaticImageData[];
  overPenta?: boolean;
}

const TimelineImages = ({ images, overPenta, ...rest }: Props) => {
  const [overPentaCount, setOverPentaCount] = useState<number>();

  useEffect(() => {
    let count = images!.length;
    setOverPentaCount(count - 5);
  }, []);

  return (
    <TimelineImagesStyled {...rest}>
      {images?.length === 1 && (
        <ImageSingleWrap>
          <ImageStyled src={images[0]} layout="fill" objectFit="cover" />
        </ImageSingleWrap>
      )}
      {images?.length === 2 && (
        <ImageDoubleWrap>
          <ImageWrap>
            <ImageStyled src={images[0]} layout="fill" objectFit="cover" />
          </ImageWrap>
          <ImageWrap>
            <ImageStyled src={images[1]} layout="fill" objectFit="cover" />
          </ImageWrap>
        </ImageDoubleWrap>
      )}
      {images?.length === 3 && (
        <ImageTripleWrap>
          <ImageWrap>
            <ImageStyled src={images[0]} layout="fill" objectFit="cover" />
          </ImageWrap>
          <ImageTripleDownWrap>
            <ImageWrap>
              <ImageStyled src={images[1]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[2]} layout="fill" objectFit="cover" />
            </ImageWrap>
          </ImageTripleDownWrap>
        </ImageTripleWrap>
      )}
      {images?.length === 4 && (
        <ImageTripleWrap>
          <ImageWrap>
            <ImageStyled src={images[0]} layout="fill" objectFit="cover" />
          </ImageWrap>
          <ImageTripleDownWrap>
            <ImageWrap>
              <ImageStyled src={images[1]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[2]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[3]} layout="fill" objectFit="cover" />
            </ImageWrap>
          </ImageTripleDownWrap>
        </ImageTripleWrap>
      )}
      {images?.length === 5 && (
        <ImageTripleWrap>
          <ImageTripleDownWrap>
            <ImageWrap>
              <ImageStyled src={images[0]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[1]} layout="fill" objectFit="cover" />
            </ImageWrap>
          </ImageTripleDownWrap>
          <ImageTripleDownWrap>
            <ImageWrap>
              <ImageStyled src={images[2]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[3]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[4]} layout="fill" objectFit="cover" />
            </ImageWrap>
          </ImageTripleDownWrap>
        </ImageTripleWrap>
      )}
      {images?.length && overPenta && (
        <ImageTripleWrap>
          <ImageTripleDownWrap>
            <ImageWrap>
              <ImageStyled src={images[0]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[1]} layout="fill" objectFit="cover" />
            </ImageWrap>
          </ImageTripleDownWrap>
          <ImageTripleDownWrap>
            <ImageWrap>
              <ImageStyled src={images[2]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageWrap>
              <ImageStyled src={images[3]} layout="fill" objectFit="cover" />
            </ImageWrap>
            <ImageOverPentaWrap>
              <ImageStyled src={images[4]} layout="fill" objectFit="cover" />
              <ImageOverPentaCountWrap>
                <Span fontSize={32}>{"+" + overPentaCount}</Span>
              </ImageOverPentaCountWrap>
            </ImageOverPentaWrap>
          </ImageTripleDownWrap>
        </ImageTripleWrap>
      )}
    </TimelineImagesStyled>
  );
};
export default TimelineImages;

export const defaultProps: Props = {
  images: [img1, img2, img3, img4, img5, img1, img1, img1],
};
TimelineImages.defaultProps = {};
