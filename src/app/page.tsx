import {getHomePageMeta} from '@/utils/frontApi';
import HomeContent from "./HomeContent";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

export async function generateMetadata() {
  try{
    const data = await getHomePageMeta();
    return {
      title: data.data.metaTitle || appName,
      description: data.data.metaDescription || appName+" app"
    };
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
      <HomeContent currentTime={currentDate}/>
    </>
  );
}
