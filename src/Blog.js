import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "./Blog.css";


export default function TitlebarBelowImageList() {
  return (
    <div className='gallery'>
      <ImageList sx={{ width: 1100, height: 1400 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}

              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: './image/ro1.jpeg',
    title: 'Room',

  },
  {
    img: './image/ro2.jpeg',
    title: 'Hall',

  },
  {
    img: './image/ro3.jpeg',
    title: 'Kitchen',

  },
  {
    img: './image/ro6.jpeg',
    title: 'Drawing Room',

  },
  {
    img: './image/ro9.jpeg',
    title: 'Room',

  },
  {
    img: './image/ro4.jpeg',
    title: 'Drawing room',

  },
  {
    img: './image/ro7.jpeg',
    title: 'Kitchen',

  },
  {
    img: './image/ro8.jpeg',
    title: 'Balcony',

  },
  {
    img: './image/ro2.jpeg',
    title: 'Rooms',

  },
  {
    img: './Image/ro1.jpeg',
    title: 'kitchen',

  },
  {
    img: './image/ro3.jpeg',
    title: 'Dining room',

  },
  {
    img: './image/ro5.jpeg',
    title: 'Bed',
  },
];
