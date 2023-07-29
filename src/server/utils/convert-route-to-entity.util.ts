const mapping: Record<string, string> = {
  businesses: 'business',
  integrations: 'integration',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
