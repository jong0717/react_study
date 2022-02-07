import create from 'zustand';

export const useTextStore = create((set) => ({
    fontSize: 14,
    increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
    trigger: false,
    toggleTrigger: () => set((state) => ({ trigger: !state.trigger }), true),
  }));


export const useCountStore = create((set) => ({
    textState : "",
    setTextState : (text) => set(() => ({textState: text}))
  }))