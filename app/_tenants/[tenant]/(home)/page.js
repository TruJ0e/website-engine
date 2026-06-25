import { Apex } from '@/components/templates';
import { getTenantData } from '@/lib/tenant';

export default async function TenantHomePage({ params }) {
  const { tenant } = params;
  const { business, template } = await getTenantData(tenant);
  const basePath = `/_tenants/${tenant}`;

  // Route to the right template — Apex is the default
  if (template === 'apex' || !template) {
    return <Apex business={business} basePath={basePath} />;
  }

  return <div>Template &quot;{template}&quot; not found.</div>;
}
