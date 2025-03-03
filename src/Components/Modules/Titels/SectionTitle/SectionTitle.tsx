export default function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="text-center tracking-[-.3px] text-3xl sm:text-4xl md:text-5xl font-semibold">
            {title}
        </h2>
    );
}
