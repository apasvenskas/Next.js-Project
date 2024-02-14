import Link from "next/link";

export default function Meals({params}){
    return(
        <>
            <main>
                <h1>Meals</h1>
                <nav>
                    <Link href="/share">Share</Link>
                </nav>
            </main>
        </>
    )
}