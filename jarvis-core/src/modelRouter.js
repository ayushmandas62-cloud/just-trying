const DEFAULT_ROUTE_CONFIG = {
  chat: ['openai:gpt-4o-mini', 'anthropic:claude-3-5-sonnet', 'google:gemini-2.0-flash'],
  summarize: ['google:gemini-2.0-flash', 'openai:gpt-4o-mini'],
  coding: ['openai:gpt-4.1', 'anthropic:claude-3-7-sonnet'],
  vision: ['openai:gpt-4o', 'google:gemini-2.0-flash'],
};

export function selectProvider(taskType, options = {}) {
  const { monthlyBudgetUsed = 0, monthlyBudgetCap = 1, latencySensitive = false } = options;

  if (monthlyBudgetUsed >= monthlyBudgetCap) {
    return { provider: 'local:fallback', reason: 'budget_cap_reached' };
  }

  const route = DEFAULT_ROUTE_CONFIG[taskType] ?? DEFAULT_ROUTE_CONFIG.chat;
  const provider = latencySensitive ? route[0] : route[Math.min(1, route.length - 1)];

  return { provider, reason: 'route_policy' };
}

export { DEFAULT_ROUTE_CONFIG };
