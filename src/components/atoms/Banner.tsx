import React from 'react';

interface BannerProps {
  url: string;
  styles?: string;
  height: number;
}

const Banner = ({ url, styles, height }: BannerProps) => {
  return (
    <div
      className={`${styles} brightness-50 bg-cover bg-center relative`}
      style={{
        height: `${height}vh`,
        backgroundImage: `url(${url})`,
      }}
    ></div>
  );
};

export default Banner;
