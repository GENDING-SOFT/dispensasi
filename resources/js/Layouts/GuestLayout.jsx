import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            
                <Link href="/" className="flex justify-center">
                    <ApplicationLogo className="w-12 h-12 mt-4  fill-current text-gray-500" />
                </Link>
                {children}
            </div>
        </div>
    );
}
