import { Montserrat } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
    weight: ["100", "400", "700", "900"],
    subsets: ["latin"]
});

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}