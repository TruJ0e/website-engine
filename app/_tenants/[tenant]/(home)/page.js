import { Apex, Lumina, Kinetic, Momentum, Atelier } from '@/components/templates';
import { getTenantData } from '@/lib/tenant';

const HOMES = { apex: Apex, lumina: Lumina, kinetic: Kinetic, momentum: Momentum, atelier: Atelier };

export default async function TenantHomePage({ params }) {
  const { tenant } = params;
  const { business, template } = await getTenantData(tenant);
  const basePath = `/_tenants/${tenant}`;

  const Component = HOMES[template] || Apex;
  return <Component business={business} basePath={basePath} />;
}
