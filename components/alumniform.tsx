"use client";

import React, { useState } from 'react';
import { createClient } from '@sanity/client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'react-hot-toast'
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-14',
  ignoreBrowserTokenWarning: true
});

function AlumniForm() {

  const router = useRouter();

  const [formState, setFormState] = useState<{ image: File | null, name: string, batch: string, email: string }>({
    image: null,
    name: '',
    batch: '',
    email: '',
  });
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormState({
        ...formState,
        image: event.target.files[0],
      });
    }
  };
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setLoading(true);

    const { image, name, batch } = formState;

    if (image === null) {
      toast.error('Please upload an image!');
      setLoading(false);
      return;
    }

    try {
      const imageAsset = await client.assets.upload('image', image);
      const existingDocument = await client.fetch('*[_type == "alumni" && email == $email][0]', {email: formState.email});

      const alumni = {
        _type: 'alumni',
        image: {
          _type: 'image',
          asset: {
            _ref: imageAsset._id,
          },
        },
        name,
        batch: Number(batch),
      };

      if (existingDocument) {
        await client
          .patch(existingDocument._id)
          .set({
            name: formState.name,
            batch: formState.batch,
            image: {
              _type: 'image',
              asset: {
                _ref: imageAsset._id,
              },
            },
          })
          .commit();

          toast.success('Updated successfully!');
      } else {
        await client
          .create({
            _type: 'alumni',
            name: formState.name,
            batch: formState.batch,
            email: formState.email,
            image: {
              _type: 'image',
              asset: {
                _ref: imageAsset._id,
              },
            },
          });
          toast.success('Submitted successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
      setFormState({
        image: null,
        name: '',
        batch: '',
        email: '',
      })
      router.push('/alumni/submission/success');
    }
  };

  return (
    <div
      className='flex items-center justify-center'
    >
      <div
        className='flex flex-col items-center justify-center w-96 p-4 space-y-4'
      >
        <h1 className='text-2xl font-bold'>Alumni submit & Update Form</h1>
        <form
          className='flex flex-col space-y-2 w-full'
          onSubmit={handleSubmit}>
          <Label htmlFor="image">Image</Label>
          <Input type="file" name="image" id="image" placeholder='your picture' onChange={handleImageChange} required />
          <Label htmlFor="name">Name</Label>
          <Input required type="text" placeholder="Your Name" name="name" id="name" value={formState.name} onChange={handleChange} />
          <Label htmlFor="batch">Year of passing Highschool</Label>
          <Input required type="number" placeholder="2021" name="batch" id="batch" value={formState.batch} onChange={handleChange} />
          <Label htmlFor="email">Email</Label>
          <Input required type="email" placeholder="Your Email" name="email" id="email" value={formState.email} onChange={handleChange} />
          <div
            className='flex items-center space-x-2'
          >
            <Checkbox id='chackbox' name='chackbox' required />
            <Label
              htmlFor='checkbox'
            >
              I agree to share my name and picture on the website.
            </Label>
          </div>
          <Button type="submit" className="w-full p-2 mt-4 text-lg font-bold text-white bg-blue-950 rounded-md hover:bg-blue-900" disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default AlumniForm;
