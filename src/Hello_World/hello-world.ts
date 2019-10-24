import '../../style/styles.scss';

export const hello = () => 'Hello world!';

(<any>window).hello = hello;