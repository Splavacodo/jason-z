export default function AlbumContainer({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex justify-center items-center aspect-square h-[min(100vw,100vh)] bg-primary-bg relative">
            {children}
        </div>
    );
}
