import { QueryProvider } from "./QueryProvider.tsx";
import { Toto } from "./Toto.tsx";

export function App() {
    return (
        <QueryProvider>
            <Toto />
        </QueryProvider>
    );
}
