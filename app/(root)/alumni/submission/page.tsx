import AlumniForm from '@/components/alumniform';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Alumni Submission',
  openGraph: {
    images: [`https://${process.env.VERCEL_URL}/api/og?title=Alumni%20Submission&width=640&height=320`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alumni',
  }

}

function Page() {
  return (
    <div>
      <Card
      className='w-full max-w-xl p-8 m-auto my-10 bg-white rounded-md shadow-md dark:bg-gray-800'
      >
      <AlumniForm />
      </Card>
    </div>
  );
}

export default Page;