import test from 'node:test';
import assert from 'node:assert/strict';

import { createPolicyRegistry } from '../src/policyRegistry.js';
import { selectProvider } from '../src/modelRouter.js';
import { requiresConfirmation } from '../src/highRiskActions.js';

test('policy registry gates automation by state', () => {
  const registry = createPolicyRegistry({ whatsapp: 'disabled' });
  assert.equal(registry.canAutomate('whatsapp'), false);
  registry.set('whatsapp', 'allowed');
  assert.equal(registry.canAutomate('whatsapp'), true);
});

test('model router falls back when budget exhausted', () => {
  const pick = selectProvider('chat', { monthlyBudgetUsed: 10, monthlyBudgetCap: 10 });
  assert.equal(pick.provider, 'local:fallback');
});

test('high risk actions require confirmation', () => {
  assert.equal(requiresConfirmation('send_email'), true);
  assert.equal(requiresConfirmation('read_email'), false);
});
