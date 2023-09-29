import { TencodedPage } from './types';
export declare class Encoder {
    private encodedLIST;
    private recentCollapsible;
    private getElementType;
    private getContentFromElement;
    private handleCollapsible;
    encodeTEXT(text: string): TencodedPage[];
}
