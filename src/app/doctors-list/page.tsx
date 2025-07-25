import Header from "@/app/common/header";
import {getMetaBySlug} from '@/utils/frontApi';
import PageContent from "./PageContent";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try{
    const providerSlug = await params;
    if(providerSlug){
      return {
        title: 'Doctors List',
        description: "Doctors List"
      };
      // const data = await getMetaBySlug(providerSlug.slug);
      // return {
      //   title: data.data.metaTitle || appName,
      //   description: data.data.metaDescription || appName+" app"
      // };
    }else{
      return {
        title: appName,
        description: appName+" app"
      };  
    }
    
  }catch(err){
    return {
      title: appName,
      description: appName+" app"
    };
  }
  
}
export default function Home() {
  const currentDate = new Date();
  return (
    <>
      <PageContent currentTime={currentDate} />
    </>
  );
}
