export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const ADD_ENTRY = "ADD_ENTRY";

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRY,
    entries,
  };
}
export function addEntry(entry) {
  return {
    type: RECEIVE_ENTRY,
    entry,
  };
}
