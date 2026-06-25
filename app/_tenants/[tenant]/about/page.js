import { ApexAbout, LuminaAbout, KineticAbout, MomentumAbout, AtelierAbout } from '@/components/templates';
import { getTenantData } from '@/lib/tenant';

const ABOUTS = { apex: ApexAbout, lumina: LuminaAbout, kinetic: KineticAbout, momentum: MomentumAbout, atelier: AtelierAbout };

export default async function TenantAboutPage({ params }) {
  const { tenant } = params;
  const { business, template } = await getTenantData(tenant);
  const basePath = `/_tenants/${tenant}`;

  const Component = ABOUTS[template] || ApexAbout;
  return <Component business={business} basePath={basePath} />;
}
