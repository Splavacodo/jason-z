import AlbumContainer from "./components/AlbumContainer";
import AlbumCover from "./components/AlbumCover";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-secondary-bg">
      <AlbumContainer>
        <AlbumCover/>
      </AlbumContainer>
    </main>
  );
}
