"use client";

import React, { useState, FormEvent } from 'react';
import { client } from "@/sanity/lib/client"


const Page: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [batch, setBatch] = useState<number | ''>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!image || !name || !batch) {
      return;
    }

    const imageData = await client.assets.upload('image', image);

    
    await client.create({
      _type: 'alumni',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageData._id,
        },
      },
      name,
      batch,
    });

    setImage(null);
    setName('');
    setBatch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Year of Passing:
        <input type="number" value={batch} onChange={(e) => setBatch(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;