import Blogs from "./(components)/Blogs";
import { Suspense } from "react";


export const metadata = {
  title: 'Blogs | Sadat Alam Protik',
  description: 'Latest Blogs by Sadat Alam Protik',
};

export default function page() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  )
}
