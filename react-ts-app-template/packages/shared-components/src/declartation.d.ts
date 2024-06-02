declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.svg';

declare type LoadingState = null | 'loading' | 'failure' | 'success' | 'abort';
