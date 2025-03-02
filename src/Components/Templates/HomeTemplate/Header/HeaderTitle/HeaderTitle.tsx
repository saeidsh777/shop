import GlobalBtn from '@/Components/Modules/Btns/GlobalBtn/GlobalBtn';

export default function HeaderTitle() {
    return (
        <div>
            <h1 className="font-black text-5xl mb-8">
                Exclusive Collections
                <br /> For Z-Generation
            </h1>
            <div className="flex items-center gap-2">
                <GlobalBtn type={1} href="/shop" title="Shop New"/>
                <GlobalBtn type={2} href="/" title="Categories"/>
            </div>
        </div>
    );
}
