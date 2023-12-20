import AlumniForm from '@/components/AlumniForm';
import { Card } from '@/components/ui/card';

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