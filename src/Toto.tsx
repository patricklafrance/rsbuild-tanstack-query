import { useQueryClient } from "@tanstack/react-query";

export function Toto() {
    const test = useQueryClient();

    return (
        <div>Hey hey!</div>
    );
}
