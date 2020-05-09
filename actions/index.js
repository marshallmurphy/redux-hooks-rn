export const SETTINGS = 'SETTINGS';

export function updateSettings(data) {
  return {
    type: SETTINGS,
    payload: {
      data
    }
  }
}
