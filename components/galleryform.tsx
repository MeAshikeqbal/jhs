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
});

type FormState = {
    title: '',
    description: '',
    image: null,
    date: '',
};

function GalleryForm() {

    const router = useRouter();

    const [formState, setFormState] = useState<{ image: File | null, title: string, description: string; date: string }>({
        title: '',
        description: '',
        image: null,
        date: '',
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

        const { image, title, date, description } = formState;

        if (image === null) {
            toast.error('Please upload an image!');
            setLoading(false);
            return;
        }

        try {
            const imageAsset = await client.assets.upload('image', image);

            const gallery = {
                _type: 'gallery',
                image: {
                    _type: 'image',
                    asset: {
                        _ref: imageAsset._id,
                    },
                },
                title,
                description,
                date: (date),
            };

            const response = await client.create(gallery);


            toast.success('Image added successfully!');
            window.location.href = '/gallery/submission/success';
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {

            setLoading(false);
            setFormState({
                image: null,
                title: '',
                description: '',
                date: '',
            });


        }
    };

    return (
        <div
            className='flex items-center justify-center'
        >
            <div
                className='flex flex-col items-center justify-center w-96 p-4 space-y-4'
            >
                <h1 className='text-2xl font-bold'>
                    Gallery Form
                </h1>

                <form
                    className='flex flex-col space-y-2 w-full'
                    onSubmit={handleSubmit}>
                    <Label htmlFor="image">Image</Label>
                    <Input type="file" name="image" id="image" placeholder='your picture' onChange={handleImageChange} required />
                    <Label htmlFor="title">Image title</Label>
                    <Input required type="text" placeholder="Image title" name="title" id="title" value={formState.title} onChange={handleChange} />
                    <Label htmlFor="description">Image discription</Label>
                    <Input required type="text" placeholder="About the image" name="description" id="description" value={formState.description} onChange={handleChange} />
                    <Label htmlFor="date">
                        Date of when the picture was taken
                    </Label>
                    <Input required type="date" name="date" id="date" value={formState.date} onChange={handleChange} />
                    <div
                        className='flex items-center space-x-2'
                    >
                        <Checkbox id='chackbox' name='chackbox' required />
                        <Label
                            htmlFor='checkbox'
                        >
                            I agree to share this information on the website.
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

export default GalleryForm;
