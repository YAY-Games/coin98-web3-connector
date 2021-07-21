interface Coin98 {
  sol: {
    send: unknown;
    enable: () => Promise<string[]>;
    on?: (method: string, listener: (...args: any[]) => void) => void;
    removeListener?: (
      method: string,
      listener: (...args: any[]) => void
    ) => void;
  };
}
interface Ethereum {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}
declare interface Window {
  coin98?: Coin98;
  ethereum?: Ethereum;
}

declare const __DEV__: boolean;
