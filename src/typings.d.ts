/**
 * @file Typings.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
