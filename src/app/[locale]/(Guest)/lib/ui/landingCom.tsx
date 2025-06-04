import Image from "next/image";

export function LandingPicterOne() {
    return (
        <svg
            className="w-full absolute top-header z-0 text-secondary dark:text-dark-secondary" // Change text-blue-500 to any Tailwind text color
            viewBox="0 0 1440 682"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0H1440V611C1440 611 1226.82 699.186 888.5 679C638.485 664.083 354.5 612.5 235 611C115.5 609.5 0 666 0 666V0Z"
                fill="currentColor"
            />
        </svg>
    );
}


export function LandingPictureTow(){
    return(
        <Image src={'/landing2.png'} className="w-full absolute top-12  z-0 " width={500} height={500} alt="lading2"/>
    )
}