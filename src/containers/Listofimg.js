import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 600, height: 610 , margin:" -559px 0px 0px 50px"}} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=1400&h=1400&fit=full&auto=format`}
            srcSet={`${item.img}?w=14&h=14&fit=full&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.freeimages.com/images/small-previews/8a6/playcenter-1437313.jpg',
    title: 'Activity 1',
  },
  {
    img: 'https://media.phillyvoice.com/media/images/61021_Jersey_Devil_coaster_Six_flags.width-696.jpg',
    title: 'Activity 2',
  },
  {
    img: 'https://www.riziolawfirm.com/wp-content/uploads/2019/06/Amusement-Park-Accident-Lawyer.jpg',
    title: 'Activity 3',
  },
  {
    img: 'https://images.freeimages.com/images/small-previews/7ad/rollercoaster-1425256.jpg',
    title: 'Activity 4',
  },
  {
    img: 'https://www.publicdomainpictures.net/pictures/180000/velka/ride-at-amusement-park.jpg',
    title: 'Activity 5',
  },
  {
    img: 'https://www.publicdomainpictures.net/pictures/180000/velka/scary-carnival-ride.jpg',
    title: 'Activity 6',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiiajLKRgvVFfYfPa4or6K5IUBbcHC5qyukikSBHaMqHHihxIG4pMu7cdqVnyzHAE42I&usqp=CAU',
    title: 'Activity 7',
  },
  {
    img: 'https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Activity 8',
  },
  {
    img: 'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/mainnational/IndiaTv0f61fc_waterpark.jpg',
    title: 'Activity 9',
  },
  {
    img: 'https://www.reviewsxp.com/blog/wp-content/uploads/2019/01/Flora-Fantasia-Amusement-Park.jpg',
    title: 'Activity 10',
  },
  {
    img: 'https://totochie.com/wp-content/uploads/2020/11/Chimelong-Water-Park-China_sm.jpg',
    title: 'Activity 11',
  },
  {
    img: 'https://d1q0twczwkl2ie.cloudfront.net/wp-content/uploads/2019/05/perfect-day-coco-cay-dare-devils-tower-racers-colorful-hero.jpg',
    title: 'Activity 12',
  },
  {
    img: 'https://c0.wallpaperflare.com/preview/336/188/861/amusement-park-theme-park-carousel-paris.jpg',
    title: 'Activity 13',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Slides_Fallsview_Water_Park.jpg',
    title: 'Activity 14',
  },
  {
    img: 'https://img1.10bestmedia.com/Images/Photos/340239/Massanutten-WaterPark_54_990x660.jpeg',
    title: 'Activity 15',
  },
];
