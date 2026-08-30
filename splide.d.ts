declare module "@splidejs/splide" {
  export interface SplideOptions {
    type?: string;
    autoWidth?: boolean;
    gap?: string | number;
    focus?: string | number;
    pagination?: boolean;
    arrows?: boolean;
    speed?: number;
    easing?: string;
    drag?: boolean;
    trimSpace?: boolean;
    [key: string]: unknown;
  }

  export interface SlideComponent {
    slide: HTMLElement;
    index: number;
  }

  export interface SlidesComponent {
    get(): SlideComponent[];
  }

  export interface Components {
    Slides: SlidesComponent;
  }

  export default class Splide {
    index: number;
    length: number;
    Components: Components;
    constructor(element: string | HTMLElement, options?: SplideOptions);
    mount(): this;
    destroy(): void;
    go(control: string | number): void;
    on(events: string, handler: (...args: unknown[]) => void): this;
  }
}

declare module "@splidejs/splide/css" {}
