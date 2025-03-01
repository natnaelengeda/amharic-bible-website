"use client";

import React, { useEffect, useState } from 'react'

// Redux
import { useSelector } from 'react-redux';
import { SelectionState } from '@/state/selection';

// Books 
import BooksAsset from '@/core/Books';

export default function Main() {
  const selection = useSelector((state: { selection: SelectionState }) => state.selection);

  const [bookTitle, setBookTitle] = useState<string>("");
  const [currentChapter, setCurrentChapter] = useState<string>("");
  const [verses, setVerses] = useState<string[]>([]);

  const book = selection.book;
  const chapter = selection.chapter;

  useEffect(() => {
    if (book.title && chapter.title) {
      setBookTitle(BooksAsset.allBooks[book.index].title);
      setCurrentChapter(`ምእራፍ ${BooksAsset.allBooks[book.index].chapters[chapter.index].chapter}`);
      setVerses(BooksAsset.allBooks[book.index].chapters[chapter.index].verses);
    };

  }, [book, chapter]);

  return (
    <div
      className='w-full h-full flex flex-col items-start gap-5'>

      {/* Title */}
      <div className='w-full h-full flex flex-col items-start gap-2 border-b border-gray-300'>
        <h1 className='text-3xl font-bold'>{bookTitle}</h1>
        <h2 className='text-xl font-semibold'>{currentChapter}</h2>
      </div>

      {/* Verses */}
      <div className='w-full h-full flex flex-col items-start gap-3'>
        {
          verses.map((verse, index) => (
            <p
              key={index}
              className='text-base'>
              {`${index + 1}. ${verse}`}
            </p>
          ))}
      </div>

    </div>
  )
}
