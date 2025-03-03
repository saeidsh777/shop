import CustomersSays from './CustomersSays/CustomersSays';
import ProductSuggestion from './CustomersSays/ProductSuggestion/ProductSuggestion';
import HeaderTitle from './HeaderTitle/HeaderTitle';

export default function Header() {
    return (
        <header className='bg-[url("/images/home/header-md.jpg")] sm:bg-[url("/images/home/header-sm.jpg")] md:bg-[url("/images/home/header.jpg")] h-svh bg-bottom md:bg-top bg-cover'>
            <div className="md:flex items-center justify-between h-full container text-white relative">
                <CustomersSays />
                <ProductSuggestion />
                <div className="pt-48 md:pt-0 md:absolute bottom-0">
                    <HeaderTitle />
                </div>
            </div>
        </header>
    );
}
