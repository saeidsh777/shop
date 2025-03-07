import GlobalBtn from '@/Components/Modules/Btns/GlobalBtn/GlobalBtn';

export default function HeaderTitle() {
    return (
        <div>
            <h1 className="mb-8">
                Exclusive Collections
                <br /> For Z-Generation
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <GlobalBtn type={1} href="/products" title="Shop New"/>
                <GlobalBtn type={2} href="/" title="Categories"/>
            </div>
        </div>
    );
}
