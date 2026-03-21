import AlbumContainer from "./components/AlbumContainer";
import AlbumCover from "./components/AlbumCover";
import AlbumObi from "./components/AlbumObi";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-secondary-bg">
      <AlbumContainer>
        <AlbumObi/>
        <AlbumCover/>
      </AlbumContainer>
    </main>
  );
}
