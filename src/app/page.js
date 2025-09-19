import Main from "../(components)/Main.js";
import { montserrat } from "@/app/layout.js";

export const metadata = {
    "title": "Letter Scatter Generator"
}

export default function Page() {
    return (
        <div className={montserrat.className}>
            <Main />
        </div>
    );
}