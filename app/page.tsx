import MainScreen from "@/components/layout/MainScreen";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
    <Navbar/>
    <main>
      <MainScreen/>    
    </main>
    </div>
  );
}
