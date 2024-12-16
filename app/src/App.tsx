import { Toto } from "@rsbuild-tanstack-query/lib";
import { QueryProvider } from "./QueryProvider.tsx";

export function App() {
    return (
        <QueryProvider>
            <Toto />
        </QueryProvider>
    );
}
