/* eslint-disable import/no-default-export */
declare module '*.css' {
    const css: any;
    export default css;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}
