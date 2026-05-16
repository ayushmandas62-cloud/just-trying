const HIGH_RISK_ACTIONS = new Set([
  'send_email',
  'send_message',
  'place_call',
  'create_calendar_event',
  'delete_calendar_event',
  'external_post',
]);

export function requiresConfirmation(actionType) {
  return HIGH_RISK_ACTIONS.has(actionType);
}

export { HIGH_RISK_ACTIONS };
