import Header from "@/app/common/header";
import { getResourcesMetaBySlug} from '@/utils/frontApi';
import PageContent from "./PageContent";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try{
    const providerSlug = await params;
    if(providerSlug){
      const data = await getResourcesMetaBySlug(providerSlug.slug);
      return {
        title: data.data.metaTitle || appName,
        description: data.data.metaDescription || appName+" app"
      };
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
