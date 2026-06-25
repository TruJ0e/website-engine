import { ApexServices, LuminaServices, KineticServices, MomentumServices, AtelierServices } from '@/components/templates';
import { getTenantData } from '@/lib/tenant';

const SERVICES = { apex: ApexServices, lumina: LuminaServices, kinetic: KineticServices, momentum: MomentumServices, atelier: AtelierServices };

export default async function TenantServicesPage({ params }) {
  const { tenant } = params;
  const { business, template } = await getTenantData(tenant);
  const basePath = `/_tenants/${tenant}`;

  const Component = SERVICES[template] || ApexServices;
  return <Component business={business} basePath={basePath} />;
}
