interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Support Agent'],
  tenantName: 'Business',
  applicationName: 'SupportGPT',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
