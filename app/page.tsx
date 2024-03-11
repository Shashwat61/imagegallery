import MainScreen from "@/components/layout/MainScreen";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="h-[90vh] overflow-hidden">
    <Navbar/>
    <main>
      <MainScreen/>    
    </main>
    </div>
  );
}
