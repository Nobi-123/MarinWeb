import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
            <div>
                <h1 className="text-2xl font-bold"> Mᴀʀɪɴ <span className="opacity-50"> Kɪᴛᴀɢᴀᴡᴀ </span></h1>
            </div>
        </Link>
    )
}
