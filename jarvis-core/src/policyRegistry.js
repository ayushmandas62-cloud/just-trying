const DEFAULT_CHANNEL_POLICY = Object.freeze({
  whatsapp: 'restricted',
  instagram: 'restricted',
  sms: 'allowed',
  phone: 'allowed',
  gmail: 'allowed',
  outlook: 'allowed',
});

const VALID_STATES = new Set(['allowed', 'restricted', 'disabled']);

export function createPolicyRegistry(initialState = {}) {
  const state = { ...DEFAULT_CHANNEL_POLICY, ...initialState };

  return {
    get(channel) {
      return state[channel] ?? 'disabled';
    },
    set(channel, value) {
      if (!VALID_STATES.has(value)) {
        throw new Error(`Invalid policy state: ${value}`);
      }
      state[channel] = value;
      return state[channel];
    },
    snapshot() {
      return { ...state };
    },
    canAutomate(channel) {
      return this.get(channel) === 'allowed';
    },
  };
}

export { DEFAULT_CHANNEL_POLICY, VALID_STATES };
