import { redirect } from "next/navigation";


const default_categoryId='01';
export default async function Home({params}) {
    return redirect(`/category/${default_categoryId}`);
}
