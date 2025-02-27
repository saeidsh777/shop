import CustomersSays from "./CustomersSays/CustomersSays";

export default function Header() {
    return (
        <header className='bg-[url("/images/home/header-sm.jpg")] md:bg-[url("/images/home/header.jpg")] h-svh bg-bottom md:bg-top bg-cover'>
            <div className="flex items-center h-full container text-white">
                <CustomersSays/>
            </div>
        </header>
    );
}
