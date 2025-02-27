import { IoMdArrowForward } from 'react-icons/io';

export default function Arrow() {
    return (
        <div className="w-4 h-4 flex justify-center items-center overflow-hidden relative">
            <span className="group-hover:left-full left-0 absolute transition-all duration-[400ms] ease-out">
                <IoMdArrowForward />
            </span>
            <span className="-left-full group-hover:left-0 absolute transition-all duration-[400ms] ease-out">
                <IoMdArrowForward />
            </span>
        </div>
    );
}
