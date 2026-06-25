import { ApexAbout } from '@/components/templates';
import { getTenantData } from '@/lib/tenant';

export default async function TenantAboutPage({ params }) {
  const { tenant } = params;
  const { business, template } = await getTenantData(tenant);
  const basePath = `/_tenants/${tenant}`;

  if (template === 'apex' || !template) {
    return <ApexAbout business={business} basePath={basePath} />;
  }

  return <div>Template &quot;{template}&quot; not found.</div>;
}
