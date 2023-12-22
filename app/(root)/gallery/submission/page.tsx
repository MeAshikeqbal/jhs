import GalleryForm from '@/components/galleryform';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Gallery Submission',
  openGraph: {
    url: 'https://jalalpurhighschool.com/gallery/submission',
    images: [`https://jhs-six.vercel.app/api/og?title=Gallery%20Submission&width=640&height=320`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery',
  }
}

function Page() {
  return (
    <div>
      <Card
      className='w-full max-w-xl p-8 m-auto my-10 bg-white rounded-md shadow-md dark:bg-gray-800'
      >
      <GalleryForm />
      </Card>
    </div>
  );
}

export default Page;