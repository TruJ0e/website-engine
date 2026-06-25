import { ApexContact, LuminaContact, KineticContact, MomentumContact, AtelierContact } from '@/components/templates';
import { getTenantData } from '@/lib/tenant';

const CONTACTS = { apex: ApexContact, lumina: LuminaContact, kinetic: KineticContact, momentum: MomentumContact, atelier: AtelierContact };

export default async function TenantContactPage({ params }) {
  const { tenant } = params;
  const { business, template } = await getTenantData(tenant);
  const basePath = `/_tenants/${tenant}`;

  const Component = CONTACTS[template] || ApexContact;
  return <Component business={business} basePath={basePath} />;
}
