import { redirect } from 'next/navigation';

export default function HomeRedirect() {
  redirect('/page/1');
}
