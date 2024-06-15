import Navbar from "@/layout/Navbar";
import Header from "@/components/Header";

export default function Study({ params }: { params: { id: string } }) {
  const {id} = params;

  return (
    <>
      <Navbar />
      <Header
        title="Estudis"
        breadcrumbs={[]}
      />
    </>
  );
}

export async function generateStaticParams() {
  return [
    {id: "TG1103"},
    {id: "TG1104"}
  ]
}