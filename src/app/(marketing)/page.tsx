import { OverlayImage } from "@/shared/components/overlay-image";

export default function Home() {
  return (
    //
    <div className="h-screen">
      <OverlayImage urlImage="/image/auth/background.jpg" altImage="Home section" width={30} height={10}/>
      <p className="text-primary-blue">Home</p>
    </div>
  );
}
