import { companyServices } from "@/components/pages/serviceContent";

export default async function Page({ params }) {
  const { id } = await params;
  const companyService = companyServices.find((p) => p.id === id);
  return (
    <div>
      <h1>{companyService.title}</h1>
    </div>
  );
}
