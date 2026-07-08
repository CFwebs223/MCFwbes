type Listener = (progress: number) => void;

let progress = 0;
const listeners = new Set<Listener>();

export const scrollStore = {
  get: () => progress,
  set: (value: number) => {
    progress = value;
    listeners.forEach((l) => l(progress));
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
