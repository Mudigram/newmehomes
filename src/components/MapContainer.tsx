import dynamic from "next/dynamic";

const LeafletMap = dynamic(
    () => import("./LeafletMap"),
    { ssr: false }
);

export default function MapContainerWrapper() {
    return <LeafletMap />;
}
