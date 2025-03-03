export default function LoadingFetch() {
    return (
        <div className="container flex justify-center items-center gap-3 flex-col">
            <svg className="animate-spin h-8 w-8 mr-3 bg-black"></svg>
            <h2 className="text-4xl font-extrabold">LOADING</h2>
        </div>
    );
}
